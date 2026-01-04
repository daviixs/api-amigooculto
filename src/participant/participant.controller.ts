import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { ParticipantService } from './participant.service';
import {
  JoinGroupDto,
  CreateParticipantDto,
  UpdateParticipantDto,
  BulkApproveParticipantsDto,
  ParticipantResponseDto,
} from '../dto/participant.dto';
import { ParticipantStatus } from '@prisma/client';

@ApiTags('participants')
@Controller('participants')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post('join')
  @ApiOperation({
    summary: 'Entrar em um grupo usando código de convite',
    description:
      'Endpoint público para participantes se cadastrarem. Cria usuário automaticamente se não existir. Participante inicia com status PENDING e precisa ser aprovado pelo organizador.',
  })
  @ApiBody({
    type: JoinGroupDto,
    examples: {
      participanteNovo: {
        summary: 'Novo participante entrando',
        value: {
          inviteCode: 'A1B2C3D4',
          name: 'Maria Santos',
          email: 'maria.santos@email.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Participante adicionado com status PENDING',
    schema: {
      example: {
        id: 2,
        userId: 2,
        groupId: 1,
        status: 'PENDING',
        createdAt: '2025-12-11T22:00:00.000Z',
        user: {
          id: 2,
          name: 'Maria Santos',
          email: 'maria.santos@email.com',
        },
        group: {
          id: 1,
          name: 'Natal 2025',
          drawDate: '2025-12-25T18:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Código de convite inválido',
    schema: {
      example: {
        statusCode: 404,
        message: 'Código de convite inválido',
        error: 'Not Found',
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'Já é participante do grupo',
    schema: {
      example: {
        statusCode: 409,
        message: 'Usuário já é participante deste grupo',
        error: 'Conflict',
      },
    },
  })
  async joinGroup(@Body() dto: JoinGroupDto) {
    return this.participantService.joinGroup(dto);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar participante diretamente (apenas organizador)',
    description:
      'Organizador adiciona um usuário existente ao grupo. Pode definir status inicial.',
  })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador do grupo',
    example: 1,
  })
  @ApiBody({
    type: CreateParticipantDto,
    examples: {
      adicionarAprovado: {
        summary: 'Adicionar já aprovado',
        value: {
          userId: 3,
          groupId: 1,
          status: 'APPROVED',
        },
      },
      adicionarPendente: {
        summary: 'Adicionar pendente',
        value: {
          userId: 4,
          groupId: 1,
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Participante criado',
    schema: {
      example: {
        id: 3,
        userId: 3,
        groupId: 1,
        status: 'APPROVED',
        createdAt: '2025-12-11T22:00:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Apenas organizador pode adicionar',
  })
  @ApiResponse({
    status: 409,
    description: 'Usuário já é participante do grupo',
  })
  async create(
    @Body() dto: CreateParticipantDto,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    return this.participantService.create(dto, ownerId);
  }

  @Get('group/:groupId')
  @ApiOperation({
    summary: 'Listar participantes de um grupo',
    description:
      'Retorna todos os participantes ou filtra por status (PENDING/APPROVED)',
  })
  @ApiParam({ name: 'groupId', description: 'ID do grupo', example: 1 })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ParticipantStatus,
    description: 'Filtrar por status (PENDING ou APPROVED)',
    example: 'APPROVED',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de participantes',
    schema: {
      example: [
        {
          id: 1,
          userId: 1,
          groupId: 1,
          status: 'APPROVED',
          createdAt: '2025-12-11T22:00:00.000Z',
          user: {
            id: 1,
            name: 'João Silva',
            email: 'joao@email.com',
            phone: '11999999999',
          },
        },
        {
          id: 2,
          userId: 2,
          groupId: 1,
          status: 'PENDING',
          createdAt: '2025-12-11T22:10:00.000Z',
          user: {
            id: 2,
            name: 'Maria Santos',
            email: 'maria@email.com',
          },
        },
      ],
    },
  })
  async findByGroup(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Query('status') status?: ParticipantStatus,
  ) {
    return this.participantService.findByGroup(groupId, status);
  }

  @Get('group/:groupId/count')
  @ApiOperation({ summary: 'Contar participantes por status' })
  @ApiParam({ name: 'groupId', description: 'ID do grupo' })
  @ApiResponse({
    status: 200,
    description: 'Contagem de participantes',
    schema: {
      example: {
        total: 10,
        pending: 3,
        approved: 7,
      },
    },
  })
  async countByStatus(@Param('groupId', ParseIntPipe) groupId: number) {
    return this.participantService.countByStatus(groupId);
  }

  @Get('my-groups')
  @ApiOperation({
    summary: 'Listar grupos que o usuário participa',
    description:
      'Retorna todos os grupos em que o usuário está participando com informações completas incluindo dados do organizador (owner)',
  })
  @ApiQuery({
    name: 'userId',
    required: true,
    description: 'ID do usuário',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de participações com dados dos grupos e organizadores',
    schema: {
      example: [
        {
          id: 1,
          userId: 1,
          groupId: 1,
          status: 'APPROVED',
          joinedAt: '2025-12-11T22:00:00.000Z',
          approvedAt: '2025-12-11T22:30:00.000Z',
          group: {
            id: 1,
            name: 'Natal 2025',
            description: 'Amigo oculto da família',
            drawDate: '2025-12-25T18:00:00.000Z',
            minValue: 50,
            maxValue: 150,
            inviteCode: 'A1B2C3D4',
            ownerId: 2,
            owner: {
              id: 2,
              name: 'João Silva',
              email: 'joao@email.com',
            },
            _count: {
              participants: 10,
            },
          },
        },
        {
          id: 5,
          userId: 1,
          groupId: 3,
          status: 'PENDING',
          joinedAt: '2025-12-12T10:00:00.000Z',
          approvedAt: null,
          group: {
            id: 3,
            name: 'Trabalho 2025',
            description: null,
            drawDate: '2025-12-20T15:00:00.000Z',
            minValue: 100,
            maxValue: 300,
            inviteCode: 'XYZ12345',
            ownerId: 5,
            owner: {
              id: 5,
              name: 'Maria Santos',
              email: 'maria@email.com',
            },
            _count: {
              participants: 5,
            },
          },
        },
      ],
    },
  })
  async findMyParticipations(@Query('userId', ParseIntPipe) userId: number) {
    return this.participantService.findMyParticipations(userId);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar participante por ID',
    description:
      'Retorna informações detalhadas do participante incluindo dados do usuário e grupo',
  })
  @ApiParam({ name: 'id', description: 'ID do participante', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Participante encontrado',
    schema: {
      example: {
        id: 1,
        userId: 1,
        groupId: 1,
        status: 'APPROVED',
        createdAt: '2025-12-11T22:00:00.000Z',
        user: {
          id: 1,
          name: 'João Silva',
          email: 'joao@email.com',
          phone: '11999999999',
        },
        group: {
          id: 1,
          name: 'Natal 2025',
          drawDate: '2025-12-25T18:00:00.000Z',
          minValue: 50,
          maxValue: 150,
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Participante não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Participante não encontrado',
        error: 'Not Found',
      },
    },
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.participantService.findOne(id);
  }

  @Patch(':id/approve')
  @ApiOperation({
    summary: 'Aprovar participante (apenas organizador)',
    description:
      'Muda status de PENDING para APPROVED. Apenas o organizador do grupo pode aprovar.',
  })
  @ApiParam({ name: 'id', description: 'ID do participante', example: 2 })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Participante aprovado',
    schema: {
      example: {
        id: 2,
        userId: 2,
        groupId: 1,
        status: 'APPROVED',
        createdAt: '2025-12-11T22:00:00.000Z',
        updatedAt: '2025-12-11T23:00:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Apenas organizador pode aprovar',
    schema: {
      example: {
        statusCode: 403,
        message: 'Apenas o organizador pode aprovar participantes',
        error: 'Forbidden',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Participante já aprovado',
    schema: {
      example: {
        statusCode: 400,
        message: 'Participante já está aprovado',
        error: 'Bad Request',
      },
    },
  })
  async approve(
    @Param('id', ParseIntPipe) id: number,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    return this.participantService.approve(id, ownerId);
  }

  @Post('bulk-approve')
  @ApiOperation({
    summary: 'Aprovar múltiplos participantes',
    description:
      'Organizador aprova vários participantes de uma vez (muda status de PENDING para APPROVED)',
  })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
    example: 1,
  })
  @ApiBody({
    type: BulkApproveParticipantsDto,
    examples: {
      aprovarVarios: {
        summary: 'Aprovar 3 participantes',
        value: {
          participantIds: [2, 3, 4],
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Participantes aprovados',
    schema: {
      example: {
        message: '3 participante(s) aprovado(s) com sucesso',
        approvedCount: 3,
        participantIds: [2, 3, 4],
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Apenas organizador pode aprovar',
  })
  async bulkApprove(
    @Body() dto: BulkApproveParticipantsDto,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    return this.participantService.bulkApprove(dto, ownerId);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar status do participante',
    description:
      'Organizador pode alterar status do participante (ex: PENDING -> APPROVED)',
  })
  @ApiParam({ name: 'id', description: 'ID do participante', example: 2 })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
    example: 1,
  })
  @ApiBody({
    type: UpdateParticipantDto,
    examples: {
      aprovar: {
        summary: 'Aprovar participante',
        value: {
          status: 'APPROVED',
        },
      },
      rejeitar: {
        summary: 'Mudar para pendente',
        value: {
          status: 'PENDING',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Participante atualizado',
    schema: {
      example: {
        id: 2,
        userId: 2,
        groupId: 1,
        status: 'APPROVED',
        createdAt: '2025-12-11T22:00:00.000Z',
        updatedAt: '2025-12-11T23:00:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Apenas organizador pode atualizar',
  })
  @ApiResponse({
    status: 404,
    description: 'Participante não encontrado',
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateParticipantDto,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    return this.participantService.update(id, dto, ownerId);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remover participante',
    description:
      'Participante pode remover a si mesmo, ou organizador pode remover qualquer um. Não permite remoção após sorteio realizado.',
  })
  @ApiParam({ name: 'id', description: 'ID do participante', example: 2 })
  @ApiQuery({
    name: 'userId',
    required: true,
    description: 'ID do usuário solicitante',
    example: 2,
  })
  @ApiResponse({
    status: 200,
    description: 'Participante removido',
    schema: {
      example: {
        message: 'Participante removido com sucesso',
        participantId: 2,
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Não pode remover após sorteio',
    schema: {
      example: {
        statusCode: 400,
        message: 'Não é possível remover participante após o sorteio',
        error: 'Bad Request',
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Sem permissão',
    schema: {
      example: {
        statusCode: 403,
        message: 'Você não tem permissão para remover este participante',
        error: 'Forbidden',
      },
    },
  })
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.participantService.remove(id, userId);
  }
}
