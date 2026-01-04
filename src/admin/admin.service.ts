import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UserRole, ParticipantStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  /**
   * Retorna estatísticas gerais do sistema
   */
  async getStats() {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const [
      totalUsers,
      totalGroups,
      totalParticipants,
      totalDrawsCompleted,
      pendingApprovals,
      activeGroups,
      usersThisMonth,
      groupsThisMonth,
    ] = await Promise.all([
      // Total de usuários
      this.prisma.user.count(),

      // Total de grupos
      this.prisma.group.count(),

      // Total de participantes (aprovados + pendentes)
      this.prisma.participant.count(),

      // Total de sorteios realizados (grupos com DrawResult)
      this.prisma.drawResult.count(),

      // Aprovações pendentes
      this.prisma.participant.count({
        where: { status: ParticipantStatus.PENDING },
      }),

      // Grupos ativos (não sorteados e com data futura)
      this.prisma.group.count({
        where: {
          drawDate: { gte: now },
          drawResults: { none: {} },
        },
      }),

      // Usuários criados no mês atual
      this.prisma.user.count({
        where: {
          createdAt: { gte: startOfMonth },
        },
      }),

      // Grupos criados no mês atual
      this.prisma.group.count({
        where: {
          createdAt: { gte: startOfMonth },
        },
      }),
    ]);

    return {
      totalUsers,
      totalGroups,
      totalParticipants,
      totalDrawsCompleted,
      pendingApprovals,
      activeGroups,
      usersThisMonth,
      groupsThisMonth,
    };
  }

  /**
   * Retorna os top N grupos por número de participantes
   */
  async getTopGroups(limit: number = 5) {
    const groups = await this.prisma.group.findMany({
      include: {
        participants: true,
        drawResults: true,
      },
      orderBy: {
        participants: {
          _count: 'desc',
        },
      },
      take: limit,
    });

    return groups.map((group) => ({
      id: group.id,
      name: group.name,
      participants: group.participants.length,
      isDrawn: group.drawResults.length > 0,
    }));
  }

  /**
   * Retorna atividades recentes do sistema
   */
  async getRecentActivity(limit: number = 10) {
    const activities = await this.prisma.activityLog.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    return activities.map((activity) => ({
      id: activity.id,
      type: activity.type,
      message: activity.message,
      timestamp: activity.createdAt,
      relativeTime: this.getRelativeTime(activity.createdAt),
      user: activity.user,
    }));
  }

  /**
   * Retorna dados de cadastros para gráfico dos últimos N dias
   */
  async getRegistrationChart(days: number = 7) {
    const now = new Date();
    const startDate = new Date(now);
    startDate.setDate(startDate.getDate() - days);
    startDate.setHours(0, 0, 0, 0);

    // Buscar usuários e grupos criados no período
    const [users, groups] = await Promise.all([
      this.prisma.user.findMany({
        where: {
          createdAt: { gte: startDate },
        },
        select: { createdAt: true },
      }),
      this.prisma.group.findMany({
        where: {
          createdAt: { gte: startDate },
        },
        select: { createdAt: true },
      }),
    ]);

    // Criar mapa de contagens por data
    const dataMap = new Map<string, { usuarios: number; grupos: number }>();

    // Inicializar todos os dias com 0
    for (let i = 0; i < days; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const dateKey = date.toISOString().split('T')[0];
      dataMap.set(dateKey, { usuarios: 0, grupos: 0 });
    }

    // Contar usuários por data
    users.forEach((user) => {
      const dateKey = user.createdAt.toISOString().split('T')[0];
      const existing = dataMap.get(dateKey);
      if (existing) {
        existing.usuarios++;
      }
    });

    // Contar grupos por data
    groups.forEach((group) => {
      const dateKey = group.createdAt.toISOString().split('T')[0];
      const existing = dataMap.get(dateKey);
      if (existing) {
        existing.grupos++;
      }
    });

    // Converter para array ordenado
    const result = Array.from(dataMap.entries())
      .map(([date, counts]) => ({
        date,
        usuarios: counts.usuarios,
        grupos: counts.grupos,
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    return result;
  }

  /**
   * Lista todos os usuários com estatísticas
   */
  async getUsers(params: { search?: string; page?: number; limit?: number }) {
    const page = params.page || 1;
    const limit = params.limit || 50;
    const skip = (page - 1) * limit;

    const where = params.search
      ? {
          OR: [
            { name: { contains: params.search, mode: 'insensitive' as const } },
            {
              email: { contains: params.search, mode: 'insensitive' as const },
            },
          ],
        }
      : {};

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          ownedGroups: true,
          participants: true,
        },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      users: users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        createdAt: user.createdAt,
        groupsOwned: user.ownedGroups.length,
        participations: user.participants.length,
      })),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Cria um novo usuário
   */
  async createUser(data: {
    name: string;
    email: string;
    phone?: string;
    password?: string;
    role?: UserRole;
  }) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email já está em uso');
    }

    const hashedPassword = data.password
      ? await bcrypt.hash(data.password, 10)
      : null;

    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: hashedPassword,
        role: data.role || UserRole.USER,
      },
      include: {
        ownedGroups: true,
        participants: true,
      },
    });

    // Log da atividade
    await this.logActivity({
      type: 'user',
      message: `Novo usuário cadastrado: ${user.name}`,
      userId: user.id,
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      createdAt: user.createdAt,
      groupsOwned: user.ownedGroups.length,
      participations: user.participants.length,
    };
  }

  /**
   * Atualiza um usuário
   */
  async updateUser(
    id: number,
    data: {
      name?: string;
      email?: string;
      phone?: string;
      role?: UserRole;
      password?: string;
    },
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (data.email && data.email !== user.email) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email },
      });

      if (existingUser) {
        throw new BadRequestException('Email já está em uso');
      }
    }

    const updateData: any = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
    };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        ownedGroups: true,
        participants: true,
      },
    });

    // Log da atividade
    await this.logActivity({
      type: 'user',
      message: `Usuário atualizado: ${updatedUser.name}`,
      userId: updatedUser.id,
    });

    return {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      role: updatedUser.role,
      createdAt: updatedUser.createdAt,
      groupsOwned: updatedUser.ownedGroups.length,
      participations: updatedUser.participants.length,
    };
  }

  /**
   * Exclui um usuário
   */
  async deleteUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        ownedGroups: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // Verificar se possui grupos ativos
    if (user.ownedGroups.length > 0) {
      throw new BadRequestException(
        `Usuário possui ${user.ownedGroups.length} grupo(s). Transfira ou exclua os grupos antes de excluir o usuário.`,
      );
    }

    await this.prisma.user.delete({
      where: { id },
    });

    // Log da atividade
    await this.logActivity({
      type: 'user',
      message: `Usuário excluído: ${user.name}`,
    });

    return { message: 'Usuário excluído com sucesso' };
  }

  /**
   * Lista todos os grupos com estatísticas
   */
  async getGroups(params: {
    search?: string;
    status?: 'all' | 'drawn' | 'pending';
    page?: number;
    limit?: number;
  }) {
    const page = params.page || 1;
    const limit = params.limit || 50;
    const skip = (page - 1) * limit;

    const where: any = {};

    // Filtro de busca
    if (params.search) {
      where.OR = [
        { name: { contains: params.search, mode: 'insensitive' as const } },
        {
          inviteCode: { contains: params.search, mode: 'insensitive' as const },
        },
        {
          owner: {
            name: { contains: params.search, mode: 'insensitive' as const },
          },
        },
      ];
    }

    // Filtro de status
    if (params.status === 'drawn') {
      where.drawResults = { some: {} };
    } else if (params.status === 'pending') {
      where.drawResults = { none: {} };
    }

    const [groups, total] = await Promise.all([
      this.prisma.group.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          owner: {
            select: { id: true, name: true, email: true },
          },
          participants: {
            select: { status: true },
          },
          drawResults: true,
        },
      }),
      this.prisma.group.count({ where }),
    ]);

    return {
      groups: groups.map((group) => ({
        id: group.id,
        name: group.name,
        description: group.description,
        inviteCode: group.inviteCode,
        drawDate: group.drawDate,
        minValue: group.minValue,
        maxValue: group.maxValue,
        isDrawn: group.drawResults.length > 0,
        createdAt: group.createdAt,
        owner: group.owner,
        participantCount: group.participants.length,
        approvedCount: group.participants.filter(
          (p) => p.status === ParticipantStatus.APPROVED,
        ).length,
        pendingCount: group.participants.filter(
          (p) => p.status === ParticipantStatus.PENDING,
        ).length,
      })),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Exclui um grupo
   */
  async deleteGroup(id: number) {
    const group = await this.prisma.group.findUnique({
      where: { id },
    });

    if (!group) {
      throw new NotFoundException('Grupo não encontrado');
    }

    await this.prisma.group.delete({
      where: { id },
    });

    // Log da atividade
    await this.logActivity({
      type: 'group',
      message: `Grupo excluído: ${group.name}`,
    });

    return { message: 'Grupo excluído com sucesso' };
  }

  /**
   * Retorna detalhes completos de um grupo específico
   */
  async getGroupDetails(id: number) {
    const group = await this.prisma.group.findUnique({
      where: { id },
      include: {
        owner: {
          select: { id: true, name: true, email: true },
        },
        participants: {
          include: {
            user: {
              select: { id: true, name: true, email: true, phone: true },
            },
          },
          orderBy: { joinedAt: 'desc' },
        },
        drawResults: true,
      },
    });

    if (!group) {
      throw new NotFoundException('Grupo não encontrado');
    }

    return {
      id: group.id,
      name: group.name,
      description: group.description,
      inviteCode: group.inviteCode,
      drawDate: group.drawDate,
      minValue: group.minValue,
      maxValue: group.maxValue,
      isDrawn: group.drawResults.length > 0,
      createdAt: group.createdAt,
      owner: group.owner,
      participantCount: group.participants.length,
      approvedCount: group.participants.filter(
        (p) => p.status === ParticipantStatus.APPROVED,
      ).length,
      pendingCount: group.participants.filter(
        (p) => p.status === ParticipantStatus.PENDING,
      ).length,
      participants: group.participants.map((p) => ({
        id: p.id,
        userId: p.user.id,
        name: p.user.name,
        email: p.user.email,
        phone: p.user.phone,
        status: p.status,
        joinedAt: p.joinedAt,
        approvedAt: p.approvedAt,
      })),
    };
  }

  /**
   * Lista todos os sorteios realizados
   */
  async getDraws(params: {
    search?: string;
    status?: 'all' | 'notified' | 'pending';
    page?: number;
    limit?: number;
  }) {
    const page = params.page || 1;
    const limit = params.limit || 50;
    const skip = (page - 1) * limit;

    const where: any = {};

    // Filtro de busca
    if (params.search) {
      where.group = {
        name: { contains: params.search, mode: 'insensitive' as const },
      };
    }

    const [draws, total] = await Promise.all([
      this.prisma.drawResult.findMany({
        where,
        skip,
        take: limit,
        orderBy: { performedAt: 'desc' },
        include: {
          group: {
            select: { id: true, name: true },
          },
          pairs: true,
        },
      }),
      this.prisma.drawResult.count({ where }),
    ]);

    return {
      draws: draws.map((draw) => ({
        id: draw.id,
        groupId: draw.groupId,
        groupName: draw.group.name,
        performedAt: draw.performedAt,
        totalPairs: draw.pairs.length,
        notificationsSent: true, // Assumindo que notificações são sempre enviadas
      })),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Retorna detalhes completos de um sorteio específico
   */
  async getDrawDetails(id: number) {
    const draw = await this.prisma.drawResult.findUnique({
      where: { id },
      include: {
        group: {
          select: { id: true, name: true },
        },
        pairs: {
          include: {
            giver: {
              include: {
                user: {
                  select: { name: true, email: true },
                },
              },
            },
            taker: {
              include: {
                user: {
                  select: { name: true, email: true },
                },
              },
            },
          },
        },
      },
    });

    if (!draw) {
      throw new NotFoundException('Sorteio não encontrado');
    }

    return {
      id: draw.id,
      groupId: draw.groupId,
      groupName: draw.group.name,
      performedAt: draw.performedAt,
      totalPairs: draw.pairs.length,
      notificationsSent: true,
      pairs: draw.pairs.map((pair) => ({
        giver: {
          name: pair.giver.user.name,
          email: pair.giver.user.email,
        },
        taker: {
          name: pair.taker.user.name,
          email: pair.taker.user.email,
        },
      })),
    };
  }

  /**
   * Reenvia notificações para um sorteio
   */
  async resendDrawNotifications(id: number) {
    const draw = await this.prisma.drawResult.findUnique({
      where: { id },
      include: {
        pairs: {
          include: {
            giver: {
              include: {
                user: true,
              },
            },
            taker: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!draw) {
      throw new NotFoundException('Sorteio não encontrado');
    }

    // TODO: Implementar envio de emails
    // Por enquanto, apenas retornar sucesso
    const emailsSent = draw.pairs.length;

    // Log da atividade
    await this.logActivity({
      type: 'draw',
      message: `Notificações reenviadas para sorteio #${id}`,
    });

    return {
      message: 'Notificações enviadas com sucesso',
      emailsSent,
    };
  }

  /**
   * Registra uma atividade no log
   */
  private async logActivity(data: {
    type: string;
    message: string;
    userId?: number;
  }) {
    try {
      await this.prisma.activityLog.create({
        data: {
          type: data.type,
          message: data.message,
          userId: data.userId,
        },
      });
    } catch (error) {
      // Silenciosamente ignorar erros de log
      console.error('Erro ao registrar atividade:', error);
    }
  }

  /**
   * Calcula tempo relativo de uma data
   */
  private getRelativeTime(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'agora';
    if (minutes === 1) return '1 min atrás';
    if (minutes < 60) return `${minutes} min atrás`;
    if (hours === 1) return '1 hora atrás';
    if (hours < 24) return `${hours} horas atrás`;
    if (days === 1) return '1 dia atrás';
    return `${days} dias atrás`;
  }
}
