import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('admin')
@Roles('ADMIN')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // ==================== DASHBOARD STATS ====================

  /**
   * GET /admin/stats
   * Retorna estatísticas gerais do sistema
   */
  @Get('stats')
  async getStats() {
    return this.adminService.getStats();
  }

  /**
   * GET /admin/top-groups
   * Retorna os top N grupos por número de participantes
   */
  @Get('top-groups')
  async getTopGroups(@Query('limit') limit?: string) {
    const limitNumber = limit ? parseInt(limit, 10) : 5;
    return this.adminService.getTopGroups(limitNumber);
  }

  /**
   * GET /admin/recent-activity
   * Retorna atividades recentes do sistema
   */
  @Get('recent-activity')
  async getRecentActivity(@Query('limit') limit?: string) {
    const limitNumber = limit ? parseInt(limit, 10) : 10;
    return this.adminService.getRecentActivity(limitNumber);
  }

  // ==================== USERS MANAGEMENT ====================

  /**
   * GET /admin/users
   * Lista todos os usuários com estatísticas
   */
  @Get('users')
  async getUsers(
    @Query('search') search?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.adminService.getUsers({
      search,
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
    });
  }

  /**
   * POST /admin/users
   * Cria um novo usuário
   */
  @Post('users')
  async createUser(
    @Body()
    body: {
      name: string;
      email: string;
      phone?: string;
      password?: string;
      role?: UserRole;
    },
  ) {
    return this.adminService.createUser(body);
  }

  /**
   * PATCH /admin/users/:id
   * Atualiza um usuário
   */
  @Patch('users/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      name?: string;
      email?: string;
      phone?: string;
      role?: UserRole;
      password?: string;
    },
  ) {
    return this.adminService.updateUser(id, body);
  }

  /**
   * DELETE /admin/users/:id
   * Exclui um usuário
   */
  @Delete('users/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteUser(id);
  }

  // ==================== GROUPS MANAGEMENT ====================

  /**
   * GET /admin/groups
   * Lista todos os grupos com estatísticas
   */
  @Get('groups')
  async getGroups(
    @Query('search') search?: string,
    @Query('status') status?: 'all' | 'drawn' | 'pending',
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.adminService.getGroups({
      search,
      status: status || 'all',
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
    });
  }

  /**
   * DELETE /admin/groups/:id
   * Exclui um grupo
   */
  @Delete('groups/:id')
  async deleteGroup(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteGroup(id);
  }

  // ==================== DRAWS HISTORY ====================

  /**
   * GET /admin/draws
   * Lista todos os sorteios realizados
   */
  @Get('draws')
  async getDraws(
    @Query('search') search?: string,
    @Query('status') status?: 'all' | 'notified' | 'pending',
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.adminService.getDraws({
      search,
      status: status || 'all',
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
    });
  }

  /**
   * GET /admin/draws/:id
   * Retorna detalhes completos de um sorteio
   */
  @Get('draws/:id')
  async getDrawDetails(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.getDrawDetails(id);
  }

  /**
   * POST /admin/draws/:id/resend-notifications
   * Reenvia notificações de um sorteio
   */
  @Post('draws/:id/resend-notifications')
  async resendDrawNotifications(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.resendDrawNotifications(id);
  }
}
