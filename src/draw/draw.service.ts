import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { DrawAlgorithm } from './draw.algorithm';
import { ParticipantStatus } from '@prisma/client';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class DrawService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationService,
  ) {}

  /**
   * Executar o sorteio do grupo
   */
  async performDraw(
    groupId: number,
    ownerId: number,
    notifyParticipants: boolean = true,
  ) {
    // 1. Validar owner
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: {
        participants: {
          where: { status: ParticipantStatus.APPROVED },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!group) {
      throw new NotFoundException('Grupo não encontrado');
    }

    if (group.ownerId !== ownerId) {
      throw new ForbiddenException(
        'Apenas o organizador pode realizar o sorteio',
      );
    }

    // 2. Verificar se já existe sorteio
    const existingDraw = await this.prisma.drawResult.findFirst({
      where: { groupId },
    });

    if (existingDraw) {
      throw new BadRequestException('Sorteio já foi realizado para este grupo');
    }

    // 3. Validar mínimo de participantes
    if (group.participants.length < 3) {
      throw new BadRequestException(
        `Mínimo de 3 participantes aprovados necessários. Atual: ${group.participants.length}`,
      );
    }

    // 4. Buscar restrições do grupo através dos participantes
    const participantIds = group.participants.map((p) => p.id);
    const restrictions = await this.prisma.restriction.findMany({
      where: {
        OR: [
          { blockedGiverId: { in: participantIds } },
          { blockedTakerId: { in: participantIds } },
        ],
      },
    });

    // 5. Executar algoritmo de sorteio
    const pairs = DrawAlgorithm.shuffle(group.participants, restrictions);

    // 6. Salvar resultado em transaction
    const drawResult = await this.prisma.$transaction(async (tx) => {
      // Criar DrawResult
      const draw = await tx.drawResult.create({
        data: {
          groupId,
        },
      });

      // Criar Pairs
      await tx.pair.createMany({
        data: pairs.map((pair) => ({
          drawResultId: draw.id,
          giverId: pair.giverId,
          takerId: pair.takerId,
        })),
      });

      return draw;
    });

    // 7. Buscar resultado completo
    const completeResult = await this.prisma.drawResult.findUnique({
      where: { id: drawResult.id },
      include: {
        pairs: {
          include: {
            giver: {
              include: {
                user: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                  },
                },
              },
            },
            taker: {
              include: {
                user: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                  },
                },
                wishlist: true,
              },
            },
          },
        },
      },
    });

    // 8. Notificar participantes (se solicitado)
    let notificationResult;
    if (notifyParticipants) {
      try {
        notificationResult =
          await this.notificationService.sendDrawNotifications(drawResult.id);
      } catch (error) {
        console.error('Erro ao enviar notificações:', error);
        notificationResult = {
          totalSent: 0,
          totalFailed: pairs.length,
          error: error.message,
        };
      }
    }

    return {
      message: 'Sorteio realizado com sucesso!',
      drawId: drawResult.id,
      totalPairs: pairs.length,
      performedAt: drawResult.performedAt,
      notifications: notificationResult || {
        totalSent: 0,
        totalFailed: 0,
        details: [],
      },
    };
  }

  /**
   * Validar se o sorteio é possível
   */
  async validateDrawPossibility(groupId: number) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: {
        participants: {
          where: { status: ParticipantStatus.APPROVED },
        },
      },
    });

    if (!group) {
      throw new NotFoundException('Grupo não encontrado');
    }

    const participantIds = group.participants.map((p) => p.id);
    const restrictions = await this.prisma.restriction.findMany({
      where: {
        OR: [
          { blockedGiverId: { in: participantIds } },
          { blockedTakerId: { in: participantIds } },
        ],
      },
    });

    const errors: string[] = [];
    let isPossible = true;

    // Verificar mínimo de participantes
    if (group.participants.length < 3) {
      errors.push(
        `Mínimo de 3 participantes aprovados necessários. Atual: ${group.participants.length}`,
      );
      isPossible = false;
    }

    // Verificar se já existe sorteio
    const existingDraw = await this.prisma.drawResult.findFirst({
      where: { groupId },
    });

    if (existingDraw) {
      errors.push('Sorteio já foi realizado para este grupo');
      isPossible = false;
    }

    // Tentar validar matematicamente
    if (isPossible) {
      try {
        // Validar sem executar
        DrawAlgorithm.shuffle(group.participants, restrictions, 10);
      } catch (error) {
        errors.push(error.message);
        isPossible = false;
      }
    }

    return {
      isPossible,
      participantCount: group.participants.length,
      restrictionCount: restrictions.length,
      errors: errors.length > 0 ? errors : undefined,
      details: {
        groupName: group.name,
        drawDate: group.drawDate,
        minValue: group.minValue,
        maxValue: group.maxValue,
      },
    };
  }

  /**
   * Obter resultado completo do sorteio (apenas owner)
   */
  async getDrawResult(groupId: number, ownerId: number) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
    });

    if (!group) {
      throw new NotFoundException('Grupo não encontrado');
    }

    if (group.ownerId !== ownerId) {
      throw new ForbiddenException(
        'Apenas o organizador pode ver o resultado completo',
      );
    }

    const drawResult = await this.prisma.drawResult.findFirst({
      where: { groupId },
      include: {
        pairs: {
          include: {
            giver: {
              include: {
                user: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                  },
                },
              },
            },
            taker: {
              include: {
                user: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                  },
                },
                wishlist: true,
              },
            },
          },
        },
      },
    });

    if (!drawResult) {
      throw new NotFoundException('Sorteio ainda não foi realizado');
    }

    return {
      drawId: drawResult.id,
      groupId: drawResult.groupId,
      performedAt: drawResult.performedAt,
      totalPairs: drawResult.pairs.length,
      pairs: drawResult.pairs.map((pair) => ({
        giver: {
          id: pair.giver.user.id,
          name: pair.giver.user.name,
          email: pair.giver.user.email,
        },
        taker: {
          id: pair.taker.user.id,
          name: pair.taker.user.name,
          email: pair.taker.user.email,
          wishlist: pair.taker.wishlist,
        },
      })),
    };
  }

  /**
   * Ver quem eu tirei (resultado individual)
   */
  async getMyDraw(participantId: number, userId: number) {
    // Validar que o usuário é dono do participant
    const participant = await this.prisma.participant.findUnique({
      where: { id: participantId },
      include: {
        user: true,
        group: {
          select: {
            id: true,
            name: true,
            minValue: true,
            maxValue: true,
            drawDate: true,
          },
        },
      },
    });

    if (!participant) {
      throw new NotFoundException('Participante não encontrado');
    }

    if (participant.userId !== userId) {
      throw new ForbiddenException('Você só pode ver seu próprio resultado');
    }

    // Buscar o par onde o participante é o giver
    const pair = await this.prisma.pair.findFirst({
      where: {
        giverId: participantId,
      },
      include: {
        taker: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                phone: true,
              },
            },
            wishlist: true,
          },
        },
        drawResult: {
          select: {
            id: true,
            performedAt: true,
          },
        },
      },
    });

    if (!pair) {
      throw new NotFoundException(
        'Sorteio ainda não foi realizado ou você não está participando',
      );
    }

    return {
      message: '🎁 Você tirou:',
      performedAt: pair.drawResult.performedAt,
      group: participant.group,
      drawnPerson: {
        name: pair.taker.user.name,
        email: pair.taker.user.email,
        phone: pair.taker.user.phone,
      },
      wishlist: pair.taker.wishlist
        ? {
            items: pair.taker.wishlist.items,
            updatedAt: pair.taker.wishlist.updatedAt,
          }
        : null,
      suggestedValue: {
        min: participant.group.minValue,
        max: participant.group.maxValue,
      },
    };
  }

  /**
   * Verificar se é possível refazer o sorteio
   */
  async canRedraw(groupId: number, ownerId: number): Promise<boolean> {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
    });

    if (!group || group.ownerId !== ownerId) {
      return false;
    }

    // Verificar se notificações já foram enviadas
    const notifications = await this.prisma.notification.findMany({
      where: {
        groupId,
        type: 'DRAW_RESULT',
      },
    });

    // Se já enviou notificações, não pode refazer
    return notifications.length === 0;
  }

  /**
   * Deletar sorteio (apenas se notificações não foram enviadas)
   */
  async deleteDraw(groupId: number, ownerId: number) {
    const canDelete = await this.canRedraw(groupId, ownerId);

    if (!canDelete) {
      throw new ForbiddenException(
        'Não é possível deletar o sorteio após envio das notificações',
      );
    }

    const drawResult = await this.prisma.drawResult.findFirst({
      where: { groupId },
    });

    if (!drawResult) {
      throw new NotFoundException('Sorteio não encontrado');
    }

    // Deletar em transaction (pairs serão deletados automaticamente por cascade)
    await this.prisma.drawResult.delete({
      where: { id: drawResult.id },
    });

    return {
      message: 'Sorteio deletado com sucesso',
    };
  }
}
