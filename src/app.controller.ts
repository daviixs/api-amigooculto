import { Controller, Get } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { Roles } from './auth/decorators/roles.decorator';
import { CurrentUser } from './auth/decorators/current-user.decorator';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Rota pública de boas-vindas' })
  @ApiResponse({ status: 200, description: 'Mensagem de boas-vindas' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Roles('ADMIN')
  @Get('dashboard-admin')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Dashboard - Apenas Administradores',
    description:
      'Rota protegida que só pode ser acessada por usuários com role ADMIN',
  })
  @ApiResponse({
    status: 200,
    description: 'Dashboard carregado com sucesso',
    schema: {
      example: {
        message: 'Bem-vindo ao Dashboard Admin',
        stats: {
          totalUsers: 100,
          totalGroups: 25,
          activeDraws: 5,
        },
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Acesso negado - Apenas administradores',
    schema: {
      example: {
        statusCode: 403,
        message: 'Acesso negado. Requer uma das seguintes permissões: ADMIN',
        error: 'Forbidden',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Token não fornecido ou inválido',
  })
  getDashboard(@CurrentUser() user: any) {
    return {
      message: `Bem-vindo ao Dashboard Admin, ${user.name}!`,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      stats: {
        totalUsers: 100,
        totalGroups: 25,
        activeDraws: 5,
      },
    };
  }
}
