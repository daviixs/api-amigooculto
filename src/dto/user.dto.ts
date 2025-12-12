import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João Silva',
    minLength: 2,
  })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email do usuário (único no sistema)',
    example: 'joao.silva@email.com',
  })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @ApiPropertyOptional({
    description: 'Telefone do usuário (com DDD)',
    example: '11999999999',
  })
  @IsOptional()
  @IsString()
  phone?: string;
}

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'Nome completo do usuário',
    example: 'João Silva Santos',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Email do usuário',
    example: 'joao.santos@email.com',
  })
  @IsOptional()
  @IsEmail({}, { message: 'Email inválido' })
  email?: string;

  @ApiPropertyOptional({
    description: 'Telefone do usuário',
    example: '11988888888',
  })
  @IsOptional()
  @IsString()
  phone?: string;
}

export class UserResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'João Silva' })
  name: string;

  @ApiProperty({ example: 'joao.silva@email.com' })
  email: string;

  @ApiProperty({ example: '11999999999' })
  phone?: string;

  @ApiProperty({ example: '2025-12-11T22:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-12-11T22:00:00.000Z' })
  updatedAt: Date;
}
