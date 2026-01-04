import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class GroupOwnerGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const groupId = parseInt(request.params.id || request.params.groupId);
    const userId = request.user?.id;

    if (!userId) {
      throw new ForbiddenException('Usuário não autenticado');
    }

    if (!groupId || isNaN(groupId)) {
      throw new ForbiddenException('ID do grupo inválido');
    }

    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      select: { ownerId: true },
    });

    if (!group) {
      throw new NotFoundException('Grupo não encontrado');
    }

    if (group.ownerId !== userId) {
      throw new ForbiddenException(
        'Apenas o organizador do grupo pode realizar esta ação',
      );
    }

    return true;
  }
}
