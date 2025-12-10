import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  Min,
  IsInt,
} from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Valor mínimo não pode ser negativo' })
  minValue?: number;

  @IsOptional()
  @IsNumber()
  @Min(0, { message: 'Valor máximo não pode ser negativo' })
  maxValue?: number;

  @IsNotEmpty({ message: 'ID do proprietário é obrigatório' })
  @IsInt()
  ownerId: number;
}

export class UpdateGroupDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  minValue?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  maxValue?: number;
}

export class GroupResponseDto {
  id: number;
  name: string;
  description: string | null;
  inviteCode: string;
  minValue: number | null;
  maxValue: number | null;
  ownerId: number;
  createdAt: Date;
  updatedAt: Date;
}
