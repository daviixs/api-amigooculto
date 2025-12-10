import {
  IsNotEmpty,
  IsInt,
  IsArray,
  ValidateNested,
  IsString,
  IsOptional,
  IsUrl,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// ==================== WISHLIST ITEM ====================
export class WishlistItemDto {
  @ApiProperty({
    description: 'Nome do item',
    example: 'Livro: O Hobbit',
  })
  @IsNotEmpty({ message: 'Nome do item é obrigatório' })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'Descrição detalhada do item',
    example: 'Edição de capa dura, ilustrada',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Link para compra do item',
    example: 'https://www.exemplo.com/produto',
  })
  @IsOptional()
  @IsUrl({}, { message: 'Link inválido' })
  link?: string;

  @ApiPropertyOptional({
    description: 'Prioridade do item (1-5, sendo 1 o mais importante)',
    example: 1,
    minimum: 1,
    maximum: 5,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  priority?: number;
}

// ==================== CREATE ====================
export class CreateWishlistDto {
  @ApiProperty({
    description: 'ID do participante',
    example: 1,
  })
  @IsNotEmpty({ message: 'ID do participante é obrigatório' })
  @IsInt()
  participantId: number;

  @ApiProperty({
    description: 'Lista de itens desejados',
    type: [WishlistItemDto],
    example: [
      {
        name: 'Livro: O Hobbit',
        description: 'Edição de capa dura',
        link: 'https://exemplo.com/hobbit',
        priority: 1,
      },
      {
        name: 'Caneca personalizada',
        priority: 2,
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WishlistItemDto)
  items: WishlistItemDto[];
}

// ==================== UPDATE ====================
export class UpdateWishlistDto {
  @ApiProperty({
    description: 'Lista atualizada de itens desejados',
    type: [WishlistItemDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WishlistItemDto)
  items: WishlistItemDto[];
}

// ==================== RESPONSE ====================
export class WishlistResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  participantId: number;

  @ApiProperty({ type: [WishlistItemDto] })
  items: WishlistItemDto[];

  @ApiProperty()
  updatedAt: Date;
}
