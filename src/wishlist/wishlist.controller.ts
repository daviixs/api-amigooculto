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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
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
      'Participante cria sua lista de desejos com os itens desejados. Participante deve estar APPROVED.',
  })
  @ApiBody({
    type: CreateWishlistDto,
    examples: {
      listaCompleta: {
        summary: 'Lista com itens detalhados',
        value: {
          participantId: 1,
          items: [
            {
              name: 'Livro: O Hobbit',
              description: 'Edição de capa dura, ilustrada',
              link: 'https://www.amazon.com.br/hobbit',
              priority: 1,
            },
            {
              name: 'Caneca personalizada',
              description: 'Com foto da família',
              priority: 2,
            },
            {
              name: 'Chocolate gourmet',
            },
          ],
        },
      },
      listaSimples: {
        summary: 'Lista básica',
        value: {
          participantId: 1,
          items: [{ name: 'Livro' }, { name: 'Caneca' }, { name: 'Chocolate' }],
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Lista criada com sucesso',
    schema: {
      example: {
        id: 1,
        participantId: 1,
        items: [
          {
            name: 'Livro: O Hobbit',
            description: 'Edição de capa dura',
            link: 'https://www.amazon.com.br/hobbit',
            priority: 1,
          },
          {
            name: 'Caneca personalizada',
            priority: 2,
          },
        ],
        createdAt: '2025-12-11T22:00:00.000Z',
        updatedAt: '2025-12-11T22:00:00.000Z',
      },
    },
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
  @ApiParam({ name: 'id', description: 'ID do participante', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Lista encontrada',
    schema: {
      example: {
        id: 1,
        participantId: 1,
        items: [
          {
            name: 'Livro: O Hobbit',
            description: 'Edição de capa dura',
            link: 'https://www.amazon.com.br/hobbit',
            priority: 1,
          },
          {
            name: 'Caneca personalizada',
            priority: 2,
          },
          {
            name: 'Chocolate gourmet',
          },
        ],
        createdAt: '2025-12-11T22:00:00.000Z',
        updatedAt: '2025-12-11T22:00:00.000Z',
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Lista não encontrada' })
  async findByParticipant(@Param('id', ParseIntPipe) participantId: number) {
    return this.wishlistService.findByParticipant(participantId);
  }

  @Patch(':participantId')
  @ApiOperation({
    summary: 'Atualizar lista de desejos',
    description:
      'Atualiza os itens da wishlist (substitui completamente a lista de itens)',
  })
  @ApiParam({
    name: 'participantId',
    description: 'ID do participante',
    example: 1,
  })
  @ApiBody({
    type: UpdateWishlistDto,
    examples: {
      atualizarLista: {
        summary: 'Atualizar itens',
        value: {
          items: [
            {
              name: 'Livro: O Senhor dos Anéis',
              description: 'Coleção completa',
              link: 'https://www.amazon.com.br/senhor-aneis',
              priority: 1,
            },
            {
              name: 'Fone de ouvido Bluetooth',
              priority: 2,
            },
          ],
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Lista atualizada',
    schema: {
      example: {
        id: 1,
        participantId: 1,
        items: [
          {
            name: 'Livro: O Senhor dos Anéis',
            description: 'Coleção completa',
            priority: 1,
          },
        ],
        updatedAt: '2025-12-11T22:30:00.000Z',
      },
    },
  })
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
    description:
      'Remove a wishlist do participante. Pode ser feito antes do sorteio.',
  })
  @ApiParam({
    name: 'participantId',
    description: 'ID do participante',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Lista removida',
    schema: {
      example: {
        message: 'Lista de desejos removida com sucesso',
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Lista não encontrada' })
  async delete(@Param('participantId', ParseIntPipe) participantId: number) {
    return this.wishlistService.delete(participantId);
  }
}
