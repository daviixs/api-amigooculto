import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto';
import { FirebaseAuthGuard } from '../auth/firebase-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { FirebaseUser } from '../auth/decorators/firebase-user.decorator';
import { Public } from '../auth/decorators/public.decorator';
import * as admin from 'firebase-admin';

@ApiTags('users')
@Controller('users')
@UseGuards(FirebaseAuthGuard) // Proteger todas as rotas por padrão
@ApiBearerAuth() // Documentação Swagger
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar novo usuário',
    description: 'Cria um novo usuário no sistema. O email deve ser único.',
  })
  @ApiBody({
    type: CreateUserDto,
    examples: {
      exemplo1: {
        summary: 'Usuário completo',
        value: {
          name: 'João Silva',
          email: 'joao.silva@email.com',
          phone: '11999999999',
        },
      },
      exemplo2: {
        summary: 'Usuário sem telefone',
        value: {
          name: 'Maria Santos',
          email: 'maria.santos@email.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
    schema: {
      example: {
        id: 1,
        name: 'João Silva',
        email: 'joao.silva@email.com',
        phone: '11999999999',
        createdAt: '2025-12-11T22:00:00.000Z',
        updatedAt: '2025-12-11T22:00:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'Email já cadastrado',
    schema: {
      example: {
        statusCode: 409,
        message: 'Email já cadastrado',
        error: 'Conflict',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
    schema: {
      example: {
        statusCode: 400,
        message: ['Email inválido', 'Nome é obrigatório'],
        error: 'Bad Request',
      },
    },
  })
  @Public() // Rota pública - não precisa de autenticação
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('me')
  @ApiOperation({
    summary: 'Obter perfil do usuário autenticado',
    description:
      'Retorna os dados do usuário atualmente autenticado via Firebase. Requer token JWT no header Authorization.',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados do usuário autenticado',
    schema: {
      example: {
        id: 1,
        firebaseUid: 'abc123xyz',
        name: 'João Silva',
        email: 'joao.silva@email.com',
        phone: '11999999999',
        createdAt: '2025-12-11T22:00:00.000Z',
        updatedAt: '2025-12-11T22:00:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Token inválido ou não fornecido',
    schema: {
      example: {
        statusCode: 401,
        message: 'Token de autenticação não fornecido',
        error: 'Unauthorized',
      },
    },
  })
  async getMe(@CurrentUser() user: any) {
    return user;
  }

  @Get('me/firebase')
  @ApiOperation({
    summary: 'Obter dados do Firebase do usuário autenticado',
    description: 'Retorna os dados do token decodificado do Firebase.',
  })
  @ApiResponse({
    status: 200,
    description: 'Dados do Firebase',
    schema: {
      example: {
        uid: 'abc123xyz',
        email: 'joao.silva@email.com',
        email_verified: true,
        name: 'João Silva',
        picture: 'https://...',
        iss: 'https://securetoken.google.com/...',
        aud: '...',
        auth_time: 1639238400,
        iat: 1639238400,
        exp: 1639242000,
      },
    },
  })
  async getFirebaseInfo(
    @FirebaseUser() firebaseUser: admin.auth.DecodedIdToken,
  ) {
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      email_verified: firebaseUser.email_verified,
      name: firebaseUser.name,
      picture: firebaseUser.picture,
      phone_number: firebaseUser.phone_number,
    };
  }

  @Get()
  @Public() // Tornar pública temporariamente, ou remover @Public() para proteger
  @ApiOperation({
    summary: 'Listar todos os usuários',
    description:
      'Retorna a lista de todos os usuários cadastrados com contadores de grupos e participações',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada',
    schema: {
      example: [
        {
          id: 1,
          name: 'João Silva',
          email: 'joao.silva@email.com',
          phone: '11999999999',
          createdAt: '2025-12-11T22:00:00.000Z',
          updatedAt: '2025-12-11T22:00:00.000Z',
          _count: {
            ownedGroups: 2,
            participants: 5,
          },
        },
        {
          id: 2,
          name: 'Maria Santos',
          email: 'maria.santos@email.com',
          createdAt: '2025-12-11T22:00:00.000Z',
          updatedAt: '2025-12-11T22:00:00.000Z',
          _count: {
            ownedGroups: 0,
            participants: 3,
          },
        },
      ],
    },
  })
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar usuário por ID',
    description:
      'Retorna os dados completos do usuário incluindo grupos que criou e participações',
  })
  @ApiParam({ name: 'id', description: 'ID do usuário', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado',
    schema: {
      example: {
        id: 1,
        name: 'João Silva',
        email: 'joao.silva@email.com',
        phone: '11999999999',
        createdAt: '2025-12-11T22:00:00.000Z',
        updatedAt: '2025-12-11T22:00:00.000Z',
        ownedGroups: [
          {
            id: 1,
            name: 'Natal 2025',
            inviteCode: 'A1B2C3D4',
          },
        ],
        participants: [
          {
            id: 1,
            groupId: 1,
            status: 'APPROVED',
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Usuário não encontrado',
        error: 'Not Found',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'ID inválido',
    schema: {
      example: {
        statusCode: 400,
        message: 'Validation failed (numeric string is expected)',
        error: 'Bad Request',
      },
    },
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar usuário',
    description: 'Atualiza os dados do usuário. Todos os campos são opcionais.',
  })
  @ApiParam({ name: 'id', description: 'ID do usuário', example: 1 })
  @ApiBody({
    type: UpdateUserDto,
    examples: {
      atualizarNome: {
        summary: 'Atualizar apenas nome',
        value: {
          name: 'João Silva Santos',
        },
      },
      atualizarEmail: {
        summary: 'Atualizar email',
        value: {
          email: 'joao.santos@email.com',
        },
      },
      atualizarTudo: {
        summary: 'Atualizar todos os campos',
        value: {
          name: 'João Silva Santos',
          email: 'joao.santos@email.com',
          phone: '11988888888',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado',
    schema: {
      example: {
        id: 1,
        name: 'João Silva Santos',
        email: 'joao.santos@email.com',
        phone: '11988888888',
        createdAt: '2025-12-11T22:00:00.000Z',
        updatedAt: '2025-12-11T22:30:00.000Z',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
  })
  @ApiResponse({
    status: 409,
    description: 'Email já cadastrado por outro usuário',
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remover usuário',
    description:
      'Remove o usuário e todos os seus dados relacionados (grupos, participações, wishlists)',
  })
  @ApiParam({ name: 'id', description: 'ID do usuário', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Usuário removido',
    schema: {
      example: {
        message: 'Usuário removido com sucesso',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
