import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { WishlistService } from './wishlist.service';
import {
  CreateWishlistDto,
  UpdateWishlistDto,
  WishlistResponseDto,
} from 'src/dto';

@ApiTags('wishlists')
@Controller('wishlists')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar lista de desejos',
    description:
      'Participante cria sua lista de desejos com os itens desejados',
  })
  @ApiResponse({
    status: 201,
    description: 'Lista criada com sucesso',
    type: WishlistResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Participante não encontrado' })
  @ApiResponse({
    status: 400,
    description: 'Participante precisa estar aprovado',
  })
  @ApiResponse({
    status: 409,
    description: 'Participante já possui lista de desejos',
  })
  async create(@Body() dto: CreateWishlistDto) {
    return this.wishlistService.create(dto);
  }

  @Get('participant/:id')
  @ApiOperation({
    summary: 'Buscar lista de desejos do participante',
    description: 'Retorna a wishlist completa de um participante',
  })
  @ApiParam({ name: 'id', description: 'ID do participante' })
  @ApiResponse({
    status: 200,
    description: 'Lista encontrada',
    type: WishlistResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Lista não encontrada' })
  async findByParticipant(@Param('id', ParseIntPipe) participantId: number) {
    return this.wishlistService.findByParticipant(participantId);
  }

  @Patch(':participantId')
  @ApiOperation({
    summary: 'Atualizar lista de desejos',
    description: 'Atualiza os itens da wishlist (substitui completamente)',
  })
  @ApiParam({ name: 'participantId', description: 'ID do participante' })
  @ApiResponse({ status: 200, description: 'Lista atualizada' })
  @ApiResponse({ status: 404, description: 'Lista não encontrada' })
  async update(
    @Param('participantId', ParseIntPipe) participantId: number,
    @Body() dto: UpdateWishlistDto,
  ) {
    return this.wishlistService.update(participantId, dto);
  }

  @Delete(':participantId')
  @ApiOperation({
    summary: 'Remover lista de desejos',
    description: 'Remove a wishlist do participante',
  })
  @ApiParam({ name: 'participantId', description: 'ID do participante' })
  @ApiResponse({ status: 200, description: 'Lista removida' })
  @ApiResponse({ status: 404, description: 'Lista não encontrada' })
  async delete(@Param('participantId', ParseIntPipe) participantId: number) {
    return this.wishlistService.delete(participantId);
  }
}
