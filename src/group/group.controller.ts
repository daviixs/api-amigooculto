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
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { GroupService } from './group.service';
import { CreateGroupDto, UpdateGroupDto } from '../dto/group.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('groups')
@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar novo grupo',
    description:
      'Cria um grupo de Amigo Oculto com código de convite único gerado automaticamente',
  })
  @ApiBody({
    type: CreateGroupDto,
    examples: {
      grupoCompleto: {
        summary: 'Grupo com todos os campos',
        value: {
          name: 'Natal 2025 - Família Silva',
          description: 'Amigo Secreto da família para o Natal',
          drawDate: '2025-12-25T18:00:00.000Z',
          minValue: 50,
          maxValue: 150,
          ownerId: 1,
        },
      },
      grupoSimples: {
        summary: 'Grupo básico',
        value: {
          name: 'Amigo Oculto Trabalho',
          drawDate: '2025-12-20T12:00:00.000Z',
          ownerId: 1,
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Grupo criado com sucesso',
    schema: {
      example: {
        id: 1,
        name: 'Natal 2025 - Família Silva',
        description: 'Amigo Secreto da família para o Natal',
        inviteCode: 'A1B2C3D4',
        drawDate: '2025-12-25T18:00:00.000Z',
        minValue: 50,
        maxValue: 150,
        ownerId: 1,
        createdAt: '2025-12-11T22:00:00.000Z',
        updatedAt: '2025-12-11T22:00:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário (owner) não encontrado',
  })
  async create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar grupos',
    description: 'Lista todos os grupos ou filtra por organizador (ownerId)',
  })
  @ApiQuery({
    name: 'ownerId',
    required: false,
    description: 'Filtrar grupos por ID do organizador',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de grupos',
    schema: {
      example: [
        {
          id: 1,
          name: 'Natal 2025',
          description: 'Amigo Secreto da família',
          inviteCode: 'A1B2C3D4',
          drawDate: '2025-12-25T18:00:00.000Z',
          minValue: 50,
          maxValue: 150,
          ownerId: 1,
          _count: {
            participants: 10,
          },
        },
      ],
    },
  })
  async findAll(@Query('ownerId', ParseIntPipe) ownerId?: number) {
    return this.groupService.findAll(ownerId);
  }

  @Get('invite/:code')
  @ApiOperation({
    summary: 'Buscar grupo por código de convite',
    description:
      'Retorna informações públicas do grupo para participantes entrarem',
  })
  @ApiParam({
    name: 'code',
    description: 'Código de convite do grupo (8 caracteres)',
    example: 'A1B2C3D4',
  })
  @ApiResponse({
    status: 200,
    description: 'Grupo encontrado',
    schema: {
      example: {
        id: 1,
        name: 'Natal 2025 - Família Silva',
        description: 'Amigo Secreto da família',
        drawDate: '2025-12-25T18:00:00.000Z',
        minValue: 50,
        maxValue: 150,
        inviteCode: 'A1B2C3D4',
        _count: {
          participants: 10,
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Código de convite inválido',
  })
  async findByInviteCode(@Param('code') code: string) {
    return this.groupService.findByInviteCode(code);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar grupo por ID',
    description: 'Retorna detalhes completos do grupo incluindo participantes',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do grupo',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Grupo encontrado',
    schema: {
      example: {
        id: 1,
        name: 'Natal 2025 - Família Silva',
        description: 'Amigo Secreto da família',
        inviteCode: 'A1B2C3D4',
        drawDate: '2025-12-25T18:00:00.000Z',
        minValue: 50,
        maxValue: 150,
        ownerId: 1,
        owner: {
          id: 1,
          name: 'João Silva',
          email: 'joao@email.com',
        },
        participants: [
          {
            id: 1,
            status: 'APPROVED',
            user: {
              name: 'Maria Santos',
            },
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Grupo não encontrado',
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.groupService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar grupo',
    description: 'Apenas o organizador pode atualizar o grupo',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do grupo',
    example: 1,
  })
  @ApiBody({
    type: UpdateGroupDto,
    examples: {
      atualizarNome: {
        summary: 'Atualizar nome',
        value: {
          name: 'Natal 2025 - Família Silva Atualizado',
        },
      },
      atualizarValores: {
        summary: 'Atualizar valores',
        value: {
          minValue: 70,
          maxValue: 200,
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Grupo atualizado',
    schema: {
      example: {
        id: 1,
        name: 'Natal 2025 - Família Silva Atualizado',
        description: 'Amigo Secreto da família',
        inviteCode: 'A1B2C3D4',
        drawDate: '2025-12-25T18:00:00.000Z',
        minValue: 70,
        maxValue: 200,
        ownerId: 1,
        updatedAt: '2025-12-11T22:30:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Apenas o organizador pode atualizar',
  })
  @ApiResponse({
    status: 404,
    description: 'Grupo não encontrado',
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGroupDto: UpdateGroupDto,
    @CurrentUser('id') userId: number,
  ) {
    return this.groupService.update(id, updateGroupDto, userId);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remover grupo',
    description:
      'Apenas o organizador pode remover. Remove também todos os participantes e dados relacionados',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do grupo',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Grupo removido',
    schema: {
      example: {
        message: 'Grupo removido com sucesso',
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Apenas o organizador pode remover',
  })
  @ApiResponse({
    status: 404,
    description: 'Grupo não encontrado',
  })
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser('id') userId: number,
  ) {
    return this.groupService.remove(id, userId);
  }
}
