import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  Min,
  IsDateString,
  IsInt,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty({
    description: 'Nome do grupo',
    example: 'Natal 2025 - Família Silva',
  })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  @MinLength(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
  @MaxLength(100, { message: 'Nome deve ter no máximo 100 caracteres' })
  name: string;

  @ApiPropertyOptional({
    description: 'Descrição do grupo',
    example: 'Amigo Secreto da família para o Natal de 2025',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'Descrição deve ter no máximo 500 caracteres' })
  description?: string;

  @ApiProperty({
    description: 'Data do sorteio/evento',
    example: '2025-12-25T18:00:00.000Z',
  })
  @IsNotEmpty({ message: 'Data do sorteio é obrigatória' })
  @IsDateString()
  drawDate: Date;

  @ApiPropertyOptional({
    description: 'Valor mínimo sugerido para o presente (em R$)',
    example: 50,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Valor mínimo não pode ser negativo' })
  minValue?: number;

  @ApiPropertyOptional({
    description: 'Valor máximo sugerido para o presente (em R$)',
    example: 150,
    minimum: 0,
  })
  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Valor máximo não pode ser negativo' })
  maxValue?: number;

  @ApiProperty({
    description: 'ID do usuário que está criando o grupo (será o organizador)',
    example: 1,
  })
  @IsNotEmpty({ message: 'ID do proprietário é obrigatório' })
  @IsInt()
  ownerId: number;
}

export class UpdateGroupDto {
  @ApiPropertyOptional({
    description: 'Nome do grupo',
    example: 'Natal 2025 - Família Silva Atualizado',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Descrição do grupo',
    example: 'Amigo Secreto da família - Atualizado',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Valor mínimo sugerido',
    example: 70,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minValue?: number;

  @ApiPropertyOptional({
    description: 'Valor máximo sugerido',
    example: 200,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxValue?: number;
}

export class GroupResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Natal 2025 - Família Silva' })
  name: string;

  @ApiProperty({
    example: 'Amigo Secreto da família para o Natal de 2025',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    example: 'A1B2C3D4',
    description: 'Código de 8 caracteres para convidar participantes',
  })
  inviteCode: string;

  @ApiProperty({ example: '2025-12-25T18:00:00.000Z' })
  drawDate: Date;

  @ApiProperty({ example: 50, nullable: true })
  minValue: number | null;

  @ApiProperty({ example: 150, nullable: true })
  maxValue: number | null;

  @ApiProperty({ example: 1 })
  ownerId: number;

  @ApiProperty({ example: '2025-12-11T22:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-12-11T22:00:00.000Z' })
  updatedAt: Date;
}
