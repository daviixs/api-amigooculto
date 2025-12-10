import {
  IsNotEmpty,
  IsArray,
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// ==================== CREATE ====================
export class CreateRestrictionDto {
  @ApiProperty({
    description: 'ID do grupo',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsNotEmpty({ message: 'ID do grupo é obrigatório' })
  @IsInt()
  groupId: number;

  @ApiProperty({
    description: 'ID do participante que NÃO pode dar presente',
    example: '660e8400-e29b-41d4-a716-446655440001',
  })
  @IsNotEmpty({ message: 'ID do doador bloqueado é obrigatório' })
  @IsInt()
  blockedGiverId: number;

  @ApiProperty({
    description: 'ID do participante que NÃO pode receber deste doador',
    example: '770e8400-e29b-41d4-a716-446655440002',
  })
  @IsNotEmpty({ message: 'ID do receptor bloqueado é obrigatório' })
  @IsInt()
  blockedTakerId: number;

  @ApiPropertyOptional({
    description: 'Motivo da restrição (opcional)',
    example: 'Casal - não podem tirar um ao outro',
  })
  @IsOptional()
  @IsString()
  reason?: string;
}

// ==================== BULK CREATE ====================
export class RestrictionPairDto {
  @ApiProperty({
    description: 'ID do participante que NÃO pode dar presente',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsNotEmpty()
  @IsInt()
  giverId: number;

  @ApiProperty({
    description: 'ID do participante que NÃO pode receber',
    example: '660e8400-e29b-41d4-a716-446655440001',
  })
  @IsNotEmpty()
  @IsInt()
  takerId: number;
}

export class BulkCreateRestrictionsDto {
  @ApiProperty({
    description: 'ID do grupo',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsNotEmpty({ message: 'ID do grupo é obrigatório' })
  @IsInt()
  groupId: number;

  @ApiProperty({
    description: 'Lista de restrições a serem criadas',
    type: [RestrictionPairDto],
    example: [
      { giverId: 1, takerId: 2 },
      { giverId: 2, takerId: 1 },
      { giverId: 3, takerId: 4 },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RestrictionPairDto)
  restrictions: RestrictionPairDto[];
}

// ==================== RESPONSE ====================
export class RestrictionResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  groupId: number;

  @ApiProperty({ example: 1 })
  blockedGiverId: number;

  @ApiProperty({ example: 2 })
  blockedTakerId: number;

  @ApiPropertyOptional()
  giver?: {
    id: number;
    user: {
      name: string;
      email: string;
    };
  };

  @ApiPropertyOptional()
  taker?: {
    id: number;
    user: {
      name: string;
      email: string;
    };
  };
}
