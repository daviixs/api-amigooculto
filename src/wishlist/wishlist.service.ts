import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateWishlistDto, UpdateWishlistDto } from 'src/dto';
import { PrismaService } from 'src/database/prisma.service';
import { ParticipantStatus } from '@prisma/client';

@Injectable()
export class WishlistService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateWishlistDto) {
    // Validar se participante existe e está aprovado
    const participant = await this.prisma.participant.findUnique({
      where: { id: dto.participantId },
      include: { wishlist: true },
    });

    if (!participant) {
      throw new NotFoundException('Participante não encontrado');
    }

    if (participant.status !== ParticipantStatus.APPROVED) {
      throw new BadRequestException('Participante precisa estar aprovado');
    }

    if (participant.wishlist) {
      throw new ConflictException('Participante já possui lista de desejos');
    }

    // AQUI: Salvar o array diretamente como JSON
    return await this.prisma.wishlist.create({
      data: {
        participantId: dto.participantId,
        items: dto.items as any, // ← Array é salvo automaticamente como JSON
      },
      include: {
        participant: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async findByParticipant(participantId: number) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: { participantId },
      include: {
        participant: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!wishlist) {
      throw new NotFoundException('Lista de desejos não encontrada');
    }

    // O Prisma automaticamente converte JSON de volta para objeto
    return {
      id: wishlist.id,
      participantId: wishlist.participantId,
      items: wishlist.items, // ← Já vem como array de objetos
      updatedAt: wishlist.updatedAt,
    };
  }
  async update(participantId: number, dto: UpdateWishlistDto) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: { participantId },
    });

    if (!wishlist) {
      throw new NotFoundException('Lista de desejos não encontrada');
    }

    // Substituir o array completo
    return await this.prisma.wishlist.update({
      where: { participantId },
      data: {
        items: dto.items as any, // ← Novo array substitui o antigo
      },
    });
  }

  async delete(participantId: number) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: { participantId },
    });

    if (!wishlist) {
      throw new NotFoundException('Lista de desejos não encontrada');
    }

    await this.prisma.wishlist.delete({
      where: { participantId },
    });

    return {
      message: 'Lista de desejos removida com sucesso',
    };
  }
}
