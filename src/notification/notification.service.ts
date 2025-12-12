import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { EmailProvider } from '../email/email.provider';

@Injectable()
export class NotificationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailProvider: EmailProvider,
  ) {}

  async sendDrawNotifications(drawResultId: number) {
    const drawResult = await this.prisma.drawResult.findUnique({
      where: { id: drawResultId },
      include: {
        group: true,
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
                wishlist: true,
              },
            },
          },
        },
      },
    });

    if (!drawResult) {
      throw new Error('Resultado de sorteio não encontrado');
    }

    const results: Array<{
      participantId: number;
      participantName: string;
      success: boolean;
      error?: string;
    }> = [];

    for (const pair of drawResult.pairs) {
      try {
        // Enviar email
        const wishlistItems = Array.isArray(pair.taker.wishlist?.items)
          ? pair.taker.wishlist.items
          : [];

        await this.emailProvider.sendDrawResultEmail(
          pair.giver.user.email,
          pair.giver.user.name,
          pair.taker.user.name,
          pair.taker.user.email,
          pair.taker.user.phone,
          wishlistItems,
          drawResult.group.name,
          drawResult.group.minValue,
          drawResult.group.maxValue,
        );

        // Criar notificação no banco
        await this.prisma.notification.create({
          data: {
            userId: pair.giver.userId,
            groupId: drawResult.groupId,
            type: 'DRAW_RESULT',
            message: `Você tirou ${pair.taker.user.name} no Amigo Oculto ${drawResult.group.name}`,
          },
        });

        results.push({
          participantId: pair.giverId,
          participantName: pair.giver.user.name,
          success: true,
        });

        console.log(`✅ Email enviado para ${pair.giver.user.email}`);
      } catch (error) {
        console.error(
          `❌ Erro ao enviar para ${pair.giver.user.email}:`,
          error,
        );
        results.push({
          participantId: pair.giverId,
          participantName: pair.giver.user.name,
          success: false,
          error: error.message,
        });
      }
    }

    return {
      totalSent: results.filter((r) => r.success).length,
      totalFailed: results.filter((r) => !r.success).length,
      details: results,
    };
  }

  async sendInviteNotification(
    userId: number,
    groupName: string,
    inviteCode: string,
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    await this.prisma.notification.create({
      data: {
        userId,
        type: 'GROUP_INVITE',
        message: `Você foi convidado para o grupo ${groupName}. Use o código: ${inviteCode}`,
      },
    });

    return { success: true };
  }

  async sendApprovalNotification(participantId: number) {
    const participant = await this.prisma.participant.findUnique({
      where: { id: participantId },
      include: {
        user: true,
        group: true,
      },
    });

    if (!participant) {
      throw new Error('Participante não encontrado');
    }

    await this.prisma.notification.create({
      data: {
        userId: participant.userId,
        groupId: participant.groupId,
        type: 'PARTICIPANT_JOINED',
        message: `Sua participação no grupo ${participant.group.name} foi aprovada!`,
      },
    });

    return { success: true };
  }

  async getMyNotifications(userId: number) {
    return await this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }
}
