import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail({}, { message: 'Email inválido' })
  email: string;
}

export class UpdateUserDto {
  @IsString()
  name?: string;

  @IsEmail({}, { message: 'Email inválido' })
  email?: string;
}

export class UserResponseDto {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
