import {
  Injectable,
  NotFoundException,
  ConflictException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import {
  JoinGroupDto,
  CreateParticipantDto,
  UpdateParticipantDto,
  BulkApproveParticipantsDto,
} from '../dto/participant.dto';
import { ParticipantStatus } from '@prisma/client';

@Injectable()
export class ParticipantService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Participante entra no grupo usando código de convite
   * Cria usuário automaticamente se não existir
   */
  async joinGroup(dto: JoinGroupDto) {
    // 1. Buscar grupo pelo código de convite
    const group = await this.prisma.group.findUnique({
      where: { inviteCode: dto.inviteCode },
      include: { owner: true },
    });

    if (!group) {
      throw new NotFoundException('Código de convite inválido');
    }

    // 2. Verificar/Criar usuário
    let user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      // Criar novo usuário
      user = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
        },
      });
    }

    // 3. Verificar se já é participante
    const existingParticipant = await this.prisma.participant.findFirst({
      where: {
        userId: user.id,
        groupId: group.id,
      },
    });

    if (existingParticipant) {
      throw new ConflictException('Você já é participante deste grupo');
    }

    // 4. Criar participante com status PENDING
    const participant = await this.prisma.participant.create({
      data: {
        userId: user.id,
        groupId: group.id,
        status: ParticipantStatus.PENDING,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        group: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return participant;
  }

  /**
   * Criar participante diretamente (admin)
   */
  async create(dto: CreateParticipantDto, ownerId: number) {
    // Verificar se o grupo existe e se userId é o owner
    const group = await this.prisma.group.findUnique({
      where: { id: dto.groupId },
    });

    if (!group) {
      throw new NotFoundException('Grupo não encontrado');
    }

    if (group.ownerId !== ownerId) {
      throw new ForbiddenException(
        'Apenas o organizador pode adicionar participantes diretamente',
      );
    }

    // Verificar se usuário existe
    const user = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // Verificar duplicata
    const existing = await this.prisma.participant.findFirst({
      where: {
        userId: dto.userId,
        groupId: dto.groupId,
      },
    });

    if (existing) {
      throw new ConflictException('Usuário já é participante deste grupo');
    }

    return await this.prisma.participant.create({
      data: {
        userId: dto.userId,
        groupId: dto.groupId,
        status: dto.status || ParticipantStatus.PENDING,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  /**
   * Listar participantes de um grupo
   */
  async findByGroup(groupId: number, status?: ParticipantStatus) {
    const where: any = { groupId };

    if (status) {
      where.status = status;
    }

    return await this.prisma.participant.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            // NÃO expor email e phone para outros participantes
          },
        },
        wishlist: true,
      },
      orderBy: {
        joinedAt: 'asc',
      },
    });
  }

  /**
   * Listar grupos que o usuario participa
   */
  async findMyParticipations(userId: number) {
    return await this.prisma.participant.findMany({
      where: { userId },
      include: {
        group: {
          include: {
            owner: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            _count: {
              select: {
                participants: true,
              },
            },
          },
        },
      },
      orderBy: {
        joinedAt: 'desc',
      },
    });
  }

  /**
   * Buscar participante por ID
   */
  async findOne(id: number) {
    const participant = await this.prisma.participant.findUnique({
      where: { id },
      include: {
        user: true,
        group: true,
        wishlist: true,
      },
    });

    if (!participant) {
      throw new NotFoundException('Participante não encontrado');
    }

    return participant;
  }

  /**
   * Aprovar um participante
   */
  async approve(participantId: number, ownerId: number) {
    const participant = await this.prisma.participant.findUnique({
      where: { id: participantId },
      include: { group: true },
    });

    if (!participant) {
      throw new NotFoundException('Participante não encontrado');
    }

    // Verificar se é o owner do grupo
    if (participant.group.ownerId !== ownerId) {
      throw new ForbiddenException(
        'Apenas o organizador pode aprovar participantes',
      );
    }

    // Verificar se já está aprovado
    if (participant.status === ParticipantStatus.APPROVED) {
      throw new BadRequestException('Participante já está aprovado');
    }

    return await this.prisma.participant.update({
      where: { id: participantId },
      data: { status: ParticipantStatus.APPROVED },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  /**
   * Aprovar múltiplos participantes
   */
  async bulkApprove(dto: BulkApproveParticipantsDto, ownerId: number) {
    // Buscar todos os participantes
    const participantIds = dto.participantIds.map((id) => Number(id));
    const participants = await this.prisma.participant.findMany({
      where: {
        id: { in: participantIds },
      },
      include: { group: true },
    });

    if (participants.length === 0) {
      throw new NotFoundException('Nenhum participante encontrado');
    }

    // Verificar se todos são do mesmo grupo
    const groupIds = [...new Set(participants.map((p) => p.groupId))];
    if (groupIds.length > 1) {
      throw new BadRequestException(
        'Todos os participantes devem ser do mesmo grupo',
      );
    }

    // Verificar se é o owner
    const firstParticipant = participants[0];
    if (firstParticipant.group.ownerId !== ownerId) {
      throw new ForbiddenException(
        'Apenas o organizador pode aprovar participantes',
      );
    }

    // Atualizar em lote
    await this.prisma.participant.updateMany({
      where: {
        id: { in: participantIds },
      },
      data: {
        status: ParticipantStatus.APPROVED,
      },
    });

    return {
      message: `${dto.participantIds.length} participante(s) aprovado(s) com sucesso`,
      approvedCount: dto.participantIds.length,
    };
  }

  /**
   * Atualizar status do participante
   */
  async update(
    participantId: number,
    dto: UpdateParticipantDto,
    ownerId: number,
  ) {
    const participant = await this.prisma.participant.findUnique({
      where: { id: participantId },
      include: { group: true },
    });

    if (!participant) {
      throw new NotFoundException('Participante não encontrado');
    }

    // Verificar se é o owner
    if (participant.group.ownerId !== ownerId) {
      throw new ForbiddenException(
        'Apenas o organizador pode atualizar participantes',
      );
    }

    return await this.prisma.participant.update({
      where: { id: participantId },
      data: dto,
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  /**
   * Remover participante do grupo
   */
  async remove(participantId: number, requestUserId: number) {
    const participant = await this.prisma.participant.findUnique({
      where: { id: participantId },
      include: { group: true },
    });

    if (!participant) {
      throw new NotFoundException('Participante nao encontrado');
    }

    const isOwner = participant.group.ownerId === requestUserId;
    const isSelf = participant.userId === requestUserId;

    if (!isOwner && !isSelf) {
      throw new ForbiddenException(
        'Voce nao tem permissao para remover este participante',
      );
    }

    const wasDrawn = await this.prisma.pair.findFirst({
      where: {
        OR: [{ giverId: participantId }, { takerId: participantId }],
      },
    });

    if (wasDrawn) {
      throw new BadRequestException(
        'Nao e possivel remover participantes que ja participaram do sorteio',
      );
    }

    await this.prisma.participant.delete({
      where: { id: participantId },
    });

    return {
      message: 'Participante removido com sucesso',
    };
  }

  /**
   * Contar participantes por status
   */
  async countByStatus(groupId: number) {
    const [total, pending, approved] = await Promise.all([
      this.prisma.participant.count({
        where: { groupId },
      }),
      this.prisma.participant.count({
        where: { groupId, status: ParticipantStatus.PENDING },
      }),
      this.prisma.participant.count({
        where: { groupId, status: ParticipantStatus.APPROVED },
      }),
    ]);

    return {
      total,
      pending,
      approved,
    };
  }
}
