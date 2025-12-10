import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsOptional,
  IsEnum,
  IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ParticipantStatus } from '@prisma/client';

// ==================== CREATE ====================
export class JoinGroupDto {
  @ApiProperty({
    description: 'Código de convite do grupo',
    example: 'A1B2C3D4',
  })
  @IsNotEmpty({ message: 'Código de convite é obrigatório' })
  @IsString()
  inviteCode: string;

  @ApiProperty({
    description: 'Nome do participante',
    example: 'João Silva',
  })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email do participante',
    example: 'joao@email.com',
  })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail({}, { message: 'Email inválido' })
  email: string;
}

export class CreateParticipantDto {
  @ApiProperty({
    description: 'ID do usuário',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsNotEmpty({ message: 'ID do usuário é obrigatório' })
  @IsInt()
  userId: number;

  @ApiProperty({
    description: 'ID do grupo',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsNotEmpty({ message: 'ID do grupo é obrigatório' })
  @IsInt()
  groupId: number;

  @ApiPropertyOptional({
    description: 'Status do participante',
    enum: ParticipantStatus,
    default: ParticipantStatus.PENDING,
  })
  @IsOptional()
  @IsEnum(ParticipantStatus)
  status?: ParticipantStatus;
}

// ==================== UPDATE ====================
export class UpdateParticipantDto {
  @ApiPropertyOptional({
    description: 'Status do participante',
    enum: ParticipantStatus,
  })
  @IsOptional()
  @IsEnum(ParticipantStatus)
  status?: ParticipantStatus;
}

export class ApproveParticipantDto {
  @ApiProperty({
    description: 'ID do participante a ser aprovado',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsNotEmpty()
  @IsInt()
  participantId: number;
}

export class BulkApproveParticipantsDto {
  @ApiProperty({
    description: 'IDs dos participantes a serem aprovados',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsNotEmpty()
  @IsInt({
    each: true,
    message: 'Todos os IDs devem ser números inteiros válidos',
  })
  participantIds: number[];
}

// ==================== RESPONSE ====================
export class ParticipantResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  groupId: number;

  @ApiProperty({ enum: ParticipantStatus })
  status: ParticipantStatus;

  @ApiProperty()
  createdAt: Date;

  @ApiPropertyOptional()
  user?: {
    id: number;
    name: string;
    email: string;
  };
}
