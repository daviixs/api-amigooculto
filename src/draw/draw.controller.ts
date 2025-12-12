import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Query,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { DrawService } from './draw.service';
import { PerformDrawDto } from '../dto/draw.dto';

@ApiTags('draw')
@Controller('draw')
export class DrawController {
  constructor(private readonly drawService: DrawService) {}

  @Post('perform/:groupId')
  @ApiOperation({
    summary: 'Executar sorteio do grupo (apenas organizador)',
    description:
      'Realiza o sorteio aleatório respeitando restrições (ex: casais não podem tirar um ao outro). Só pode ser feito uma vez, a menos que seja deletado antes do envio de notificações.',
  })
  @ApiParam({ name: 'groupId', description: 'ID do grupo', example: 1 })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
    example: 1,
  })
  @ApiBody({
    type: PerformDrawDto,
    examples: {
      comNotificacoes: {
        summary: 'Realizar sorteio e notificar participantes',
        value: {
          notifyParticipants: true,
        },
      },
      semNotificacoes: {
        summary: 'Realizar sorteio sem notificar (modo teste)',
        value: {
          notifyParticipants: false,
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Sorteio realizado com sucesso',
    schema: {
      example: {
        message: 'Sorteio realizado com sucesso!',
        drawId: 1,
        totalPairs: 8,
        drawnAt: '2025-12-25T10:00:00.000Z',
        notificationsSent: true,
        group: {
          id: 1,
          name: 'Natal 2025',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Sorteio já realizado ou participantes insuficientes',
    schema: {
      example: {
        statusCode: 400,
        message: 'Sorteio já foi realizado para este grupo',
        error: 'Bad Request',
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Apenas organizador pode executar',
    schema: {
      example: {
        statusCode: 403,
        message: 'Apenas o organizador pode realizar o sorteio',
        error: 'Forbidden',
      },
    },
  })
  async performDraw(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Query('ownerId', ParseIntPipe) ownerId: number,
    @Body() dto: PerformDrawDto,
  ) {
    return this.drawService.performDraw(
      groupId,
      ownerId,
      dto.notifyParticipants,
    );
  }

  @Get('validate/:groupId')
  @ApiOperation({
    summary: 'Validar se o sorteio é possível',
    description:
      'Verifica participantes aprovados, restrições configuradas e possibilidade matemática do sorteio. Mínimo de 3 participantes necessário.',
  })
  @ApiParam({ name: 'groupId', description: 'ID do grupo', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Validação do sorteio',
    schema: {
      example: {
        isPossible: true,
        participantCount: 8,
        approvedCount: 8,
        restrictionCount: 2,
        messages: [],
        details: {
          groupName: 'Natal 2025',
          drawDate: '2025-12-25T18:00:00.000Z',
          minValue: 50,
          maxValue: 150,
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Sorteio não é possível',
    schema: {
      example: {
        isPossible: false,
        participantCount: 2,
        approvedCount: 2,
        messages: ['Mínimo de 3 participantes necessário'],
        details: {
          groupName: 'Natal 2025',
        },
      },
    },
  })
  async validateDrawPossibility(
    @Param('groupId', ParseIntPipe) groupId: number,
  ) {
    return this.drawService.validateDrawPossibility(groupId);
  }

  @Get('result/:groupId')
  @ApiOperation({
    summary: 'Ver resultado completo do sorteio (apenas organizador)',
    description:
      'Mostra todos os pares giver->taker com wishlists. Apenas o organizador tem acesso a esta visão completa.',
  })
  @ApiParam({ name: 'groupId', description: 'ID do grupo', example: 1 })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Resultado completo do sorteio',
    schema: {
      example: {
        drawId: 1,
        groupName: 'Natal 2025',
        drawnAt: '2025-12-25T10:00:00.000Z',
        totalPairs: 8,
        notificationsSent: true,
        pairs: [
          {
            giver: { id: 1, name: 'João Silva', email: 'joao@email.com' },
            taker: { id: 2, name: 'Maria Santos', email: 'maria@email.com' },
            wishlist: {
              items: [{ name: 'Livro', link: 'amazon.com/livro' }],
              updatedAt: '2025-12-20T10:00:00.000Z',
            },
          },
          {
            giver: { id: 2, name: 'Maria Santos' },
            taker: { id: 3, name: 'Pedro Costa' },
            wishlist: null,
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Apenas organizador pode ver',
    schema: {
      example: {
        statusCode: 403,
        message: 'Apenas o organizador pode ver o resultado completo',
        error: 'Forbidden',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Sorteio não realizado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Sorteio ainda não foi realizado para este grupo',
        error: 'Not Found',
      },
    },
  })
  async getDrawResult(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    return this.drawService.getDrawResult(groupId, ownerId);
  }

  @Get('my-result/:participantId')
  @ApiOperation({
    summary: 'Ver quem eu tirei no sorteio',
    description:
      'Mostra apenas o resultado individual: quem o participante tirou e a wishlist. Cada participante só vê seu próprio resultado.',
  })
  @ApiParam({
    name: 'participantId',
    description: 'ID do participante',
    example: 1,
  })
  @ApiQuery({
    name: 'userId',
    required: true,
    description: 'ID do usuário (para validação)',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Resultado individual',
    schema: {
      example: {
        message: '🎁 Você tirou:',
        drawnAt: '2025-12-25T10:00:00.000Z',
        group: {
          name: 'Natal 2025',
          drawDate: '2025-12-25T18:00:00.000Z',
        },
        drawnPerson: {
          name: 'Maria Santos',
          email: 'maria@email.com',
          phone: '11999888888',
        },
        wishlist: {
          items: [
            {
              name: 'Livro: Sapiens',
              link: 'https://amazon.com.br/sapiens',
              priority: 'HIGH',
            },
            { name: 'Fone de ouvido Bluetooth', priority: 'MEDIUM' },
          ],
          updatedAt: '2025-12-20T10:00:00.000Z',
        },
        suggestedValue: {
          min: 50,
          max: 150,
        },
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Não pode ver resultado de outro',
    schema: {
      example: {
        statusCode: 403,
        message: 'Você só pode ver seu próprio resultado',
        error: 'Forbidden',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Sorteio não realizado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Sorteio ainda não foi realizado',
        error: 'Not Found',
      },
    },
  })
  async getMyDraw(
    @Param('participantId', ParseIntPipe) participantId: number,
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.drawService.getMyDraw(participantId, userId);
  }

  @Get('can-redraw/:groupId')
  @ApiOperation({
    summary: 'Verificar se pode refazer o sorteio',
    description: 'Retorna true se notificações ainda não foram enviadas',
  })
  @ApiParam({ name: 'groupId', description: 'ID do grupo' })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
  })
  @ApiResponse({
    status: 200,
    description: 'Indica se pode refazer',
    schema: {
      example: {
        canRedraw: true,
      },
    },
  })
  async canRedraw(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    const canRedraw = await this.drawService.canRedraw(groupId, ownerId);
    return { canRedraw };
  }

  @Delete(':groupId')
  @ApiOperation({
    summary: 'Deletar sorteio (apenas antes de enviar notificações)',
    description: 'Permite refazer o sorteio se notificações não foram enviadas',
  })
  @ApiParam({ name: 'groupId', description: 'ID do grupo' })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
  })
  @ApiResponse({
    status: 200,
    description: 'Sorteio deletado',
  })
  @ApiResponse({
    status: 403,
    description: 'Não pode deletar após envio de notificações',
  })
  async deleteDraw(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    return this.drawService.deleteDraw(groupId, ownerId);
  }
}
