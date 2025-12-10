import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateGroupDto, UpdateGroupDto } from 'src/dto/group.dto';
import { randomBytes } from 'crypto';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  private generateInviteCode(): string {
    return randomBytes(4).toString('hex').toUpperCase();
  }

  async create(data: CreateGroupDto) {
    // Verificar se o owner existe
    const owner = await this.prisma.user.findUnique({
      where: { id: data.ownerId },
    });

    if (!owner) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // Validar valores
    if (data.minValue && data.maxValue && data.minValue > data.maxValue) {
      throw new BadRequestException(
        'Valor mínimo não pode ser maior que o valor máximo',
      );
    }

    // Gerar código único de convite
    let inviteCode = this.generateInviteCode();
    let codeExists = await this.prisma.group.findUnique({
      where: { inviteCode },
    });

    while (codeExists) {
      inviteCode = this.generateInviteCode();
      codeExists = await this.prisma.group.findUnique({
        where: { inviteCode },
      });
    }

    return await this.prisma.group.create({
      data: {
        name: data.name,
        description: data.description,
        inviteCode,
        minValue: data.minValue,
        maxValue: data.maxValue,
        ownerId: data.ownerId,
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findAll(ownerId?: number) {
    return await this.prisma.group.findMany({
      where: ownerId ? { ownerId } : undefined,
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
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const group = await this.prisma.group.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        participants: {
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
        restrictions: true,
        result: {
          include: {
            pairs: true,
          },
        },
      },
    });

    if (!group) {
      throw new NotFoundException(`Grupo com ID ${id} não encontrado`);
    }

    return group;
  }

  async findByInviteCode(inviteCode: string) {
    const group = await this.prisma.group.findUnique({
      where: { inviteCode },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            participants: true,
          },
        },
      },
    });

    if (!group) {
      throw new NotFoundException('Código de convite inválido');
    }

    return group;
  }

  async update(id: number, data: UpdateGroupDto, userId: number) {
    const group = await this.findOne(id);

    // Apenas o dono pode atualizar o grupo
    if (group.ownerId !== userId) {
      throw new ForbiddenException('Apenas o dono pode editar o grupo');
    }

    // Validar valores
    const newMinValue = data.minValue ?? group.minValue;
    const newMaxValue = data.maxValue ?? group.maxValue;

    if (newMinValue && newMaxValue && newMinValue > newMaxValue) {
      throw new BadRequestException(
        'Valor mínimo não pode ser maior que o valor máximo',
      );
    }

    return await this.prisma.group.update({
      where: { id },
      data,
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async remove(id: number, userId: number) {
    const group = await this.findOne(id);

    // Apenas o dono pode deletar o grupo
    if (group.ownerId !== userId) {
      throw new ForbiddenException('Apenas o dono pode deletar o grupo');
    }

    await this.prisma.group.delete({
      where: { id },
    });

    return { message: 'Grupo removido com sucesso' };
  }
}
