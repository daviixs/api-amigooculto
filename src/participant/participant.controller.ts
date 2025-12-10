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
} from '@nestjs/swagger';
import { ParticipantService } from './participant.service';
import {
  JoinGroupDto,
  CreateParticipantDto,
  UpdateParticipantDto,
  BulkApproveParticipantsDto,
  ParticipantResponseDto,
} from 'src/dto/participant.dto';
import { ParticipantStatus } from 'src/generated/prisma';

@ApiTags('participants')
@Controller('participants')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post('join')
  @ApiOperation({
    summary: 'Entrar em um grupo usando código de convite',
    description:
      'Endpoint público para participantes se cadastrarem. Cria usuário automaticamente se não existir.',
  })
  @ApiResponse({
    status: 201,
    description: 'Participante adicionado com status PENDING',
  })
  @ApiResponse({ status: 404, description: 'Código de convite inválido' })
  @ApiResponse({ status: 409, description: 'Já é participante do grupo' })
  async joinGroup(@Body() dto: JoinGroupDto) {
    return this.participantService.joinGroup(dto);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar participante diretamente (apenas organizador)',
    description: 'Adiciona um usuário existente ao grupo',
  })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador do grupo',
  })
  @ApiResponse({ status: 201, description: 'Participante criado' })
  @ApiResponse({
    status: 403,
    description: 'Apenas organizador pode adicionar',
  })
  async create(
    @Body() dto: CreateParticipantDto,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    return this.participantService.create(dto, ownerId);
  }

  @Get('group/:groupId')
  @ApiOperation({ summary: 'Listar participantes de um grupo' })
  @ApiParam({ name: 'groupId', description: 'ID do grupo' })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ParticipantStatus,
    description: 'Filtrar por status (PENDING ou APPROVED)',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de participantes',
    type: [ParticipantResponseDto],
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
  @ApiOperation({ summary: 'Listar grupos que o usuário participa' })
  @ApiQuery({ name: 'userId', required: true, description: 'ID do usuário' })
  @ApiResponse({ status: 200, description: 'Lista de participações' })
  async findMyParticipations(@Query('userId', ParseIntPipe) userId: number) {
    return this.participantService.findMyParticipations(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar participante por ID' })
  @ApiParam({ name: 'id', description: 'ID do participante' })
  @ApiResponse({ status: 200, description: 'Participante encontrado' })
  @ApiResponse({ status: 404, description: 'Participante não encontrado' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.participantService.findOne(id);
  }

  @Patch(':id/approve')
  @ApiOperation({
    summary: 'Aprovar participante (apenas organizador)',
    description: 'Muda status de PENDING para APPROVED',
  })
  @ApiParam({ name: 'id', description: 'ID do participante' })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
  })
  @ApiResponse({ status: 200, description: 'Participante aprovado' })
  @ApiResponse({ status: 403, description: 'Apenas organizador pode aprovar' })
  @ApiResponse({ status: 400, description: 'Participante já aprovado' })
  async approve(
    @Param('id', ParseIntPipe) id: number,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    return this.participantService.approve(id, ownerId);
  }

  @Post('bulk-approve')
  @ApiOperation({
    summary: 'Aprovar múltiplos participantes',
    description: 'Aprova vários participantes de uma vez',
  })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
  })
  @ApiResponse({
    status: 200,
    description: 'Participantes aprovados',
    schema: {
      example: {
        message: '5 participante(s) aprovado(s) com sucesso',
        approvedCount: 5,
      },
    },
  })
  async bulkApprove(
    @Body() dto: BulkApproveParticipantsDto,
    @Query('ownerId', ParseIntPipe) ownerId: number,
  ) {
    return this.participantService.bulkApprove(dto, ownerId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar status do participante' })
  @ApiParam({ name: 'id', description: 'ID do participante' })
  @ApiQuery({
    name: 'ownerId',
    required: true,
    description: 'ID do organizador',
  })
  @ApiResponse({ status: 200, description: 'Participante atualizado' })
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
      'Participante pode remover a si mesmo, ou organizador pode remover qualquer um (antes do sorteio)',
  })
  @ApiParam({ name: 'id', description: 'ID do participante' })
  @ApiQuery({
    name: 'userId',
    required: true,
    description: 'ID do usuário solicitante',
  })
  @ApiResponse({ status: 200, description: 'Participante removido' })
  @ApiResponse({
    status: 400,
    description: 'Não pode remover após sorteio',
  })
  @ApiResponse({ status: 403, description: 'Sem permissão' })
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.participantService.remove(id, userId);
  }
}
