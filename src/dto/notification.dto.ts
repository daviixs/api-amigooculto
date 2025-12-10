import {
  IsNotEmpty,
  IsInt,
  IsEnum,
  IsString,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NotificationType } from 'src/generated/prisma';

// ==================== CREATE ====================
export class CreateNotificationDto {
  @ApiProperty({
    description: 'ID do usuário que receberá a notificação',
    example: 1,
  })
  @IsNotEmpty({ message: 'ID do usuário é obrigatório' })
  @IsInt()
  userId: number;

  @ApiPropertyOptional({
    description: 'ID do grupo relacionado (opcional)',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  groupId?: number;

  @ApiProperty({
    description: 'Tipo da notificação',
    enum: NotificationType,
    example: NotificationType.DRAW_RESULT,
  })
  @IsNotEmpty({ message: 'Tipo de notificação é obrigatório' })
  @IsEnum(NotificationType)
  type: NotificationType;

  @ApiProperty({
    description: 'Mensagem da notificação',
    example: 'Você tirou: João Silva no Amigo Secreto da Família',
  })
  @IsNotEmpty({ message: 'Mensagem é obrigatória' })
  @IsString()
  message: string;
}

// ==================== SEND DRAW NOTIFICATION ====================
export class SendDrawNotificationDto {
  @ApiProperty({
    description: 'ID do participante',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  participantId: number;

  @ApiProperty({
    description: 'Nome da pessoa sorteada',
    example: 'Maria Silva',
  })
  @IsNotEmpty()
  @IsString()
  drawnPersonName: string;

  @ApiPropertyOptional({
    description: 'Lista de desejos da pessoa sorteada',
    example: [
      { name: 'Livro', description: 'Ficção científica' },
      { name: 'Caneca' },
    ],
  })
  @IsOptional()
  wishlistItems?: Array<{
    name: string;
    description?: string;
    link?: string;
    priority?: number;
  }>;
}

// ==================== UPDATE ====================
export class UpdateNotificationDto {
  @ApiPropertyOptional({
    description: 'Marcar notificação como entregue',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  delivered?: boolean;
}

// ==================== RESPONSE ====================
export class NotificationResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiPropertyOptional({ example: 1 })
  groupId?: number;

  @ApiProperty({ enum: NotificationType })
  type: NotificationType;

  @ApiProperty({ example: 'Você tirou: João Silva' })
  message: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ example: false })
  delivered: boolean;

  @ApiPropertyOptional()
  user?: {
    id: number;
    name: string;
    email: string;
  };

  @ApiPropertyOptional()
  group?: {
    id: number;
    name: string;
  };
}

// ==================== RESEND NOTIFICATION ====================
export class ResendNotificationDto {
  @ApiProperty({
    description: 'ID da notificação a ser reenviada',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  notificationId: number;
}
