import { IsNotEmpty, IsBoolean, IsOptional, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// ==================== PERFORM DRAW ====================
export class PerformDrawDto {
  @ApiProperty({
    description: 'ID do grupo',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsNotEmpty({ message: 'ID do grupo é obrigatório' })
  @IsInt()
  groupId: number;

  @ApiPropertyOptional({
    description: 'Enviar notificações aos participantes automaticamente',
    example: true,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  notifyParticipants?: boolean;
}

// ==================== PAIR RESULT ====================
export class PairResultDto {
  @ApiProperty({ example: 1 })
  giverId: number;

  @ApiProperty({ example: 2 })
  takerId: number;

  @ApiPropertyOptional()
  giverName?: string;

  @ApiPropertyOptional()
  takerName?: string;
}

// ==================== DRAW RESULT ====================
export class DrawResultResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  groupId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({
    description: 'Lista de pares (quem tirou quem)',
    type: [PairResultDto],
  })
  pairs: PairResultDto[];
}

// ==================== MY DRAW RESULT ====================
export class MyDrawResultDto {
  @ApiProperty({
    description: 'ID do participante',
    example: 1,
  })
  participantId: number;

  @ApiProperty({
    description: 'Pessoa que você tirou',
    example: {
      id: 2,
      name: 'Maria Silva',
      email: 'maria@email.com',
    },
  })
  drawnPerson: {
    id: number;
    name: string;
    email: string;
  };

  @ApiPropertyOptional({
    description: 'Lista de desejos da pessoa sorteada',
    example: [
      {
        name: 'Livro',
        description: 'Ficção',
        link: 'https://...',
        priority: 1,
      },
    ],
  })
  wishlist?: Array<{
    name: string;
    description?: string;
    link?: string;
    priority?: number;
  }>;

  @ApiPropertyOptional({
    description: 'Informações do grupo',
    example: {
      name: 'Amigo Secreto da Família',
      minValue: 50,
      maxValue: 100,
    },
  })
  groupInfo?: {
    name: string;
    minValue?: number;
    maxValue?: number;
  };
}

// ==================== VALIDATE DRAW ====================
export class ValidateDrawResponseDto {
  @ApiProperty({
    description: 'Indica se o sorteio é possível',
    example: true,
  })
  isPossible: boolean;

  @ApiPropertyOptional({
    description: 'Mensagem de erro se não for possível',
    example: 'Mínimo de 3 participantes aprovados necessário',
  })
  message?: string;

  @ApiPropertyOptional({
    description: 'Detalhes da validação',
    example: {
      totalParticipants: 5,
      approvedParticipants: 5,
      totalRestrictions: 2,
      canDraw: true,
    },
  })
  details?: {
    totalParticipants: number;
    approvedParticipants: number;
    totalRestrictions: number;
    canDraw: boolean;
  };
}
