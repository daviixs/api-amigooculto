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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import {
  SearchQueryDto,
  GroupsQueryDto,
  DrawsQueryDto,
  LimitQueryDto,
  RegistrationChartQueryDto,
} from './dto/admin-queries.dto';
import { CreateUserDto, UpdateUserDto } from './dto/admin-user.dto';

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
  async getTopGroups(@Query() query: LimitQueryDto) {
    return this.adminService.getTopGroups(query.limit);
  }

  /**
   * GET /admin/recent-activity
   * Retorna atividades recentes do sistema
   */
  @Get('recent-activity')
  async getRecentActivity(@Query() query: LimitQueryDto) {
    return this.adminService.getRecentActivity(query.limit);
  }

  /**
   * GET /admin/registration-chart
   * Retorna dados de cadastros para gráfico (últimos N dias)
   */
  @Get('registration-chart')
  async getRegistrationChart(@Query() query: RegistrationChartQueryDto) {
    return this.adminService.getRegistrationChart(query.days);
  }

  // ==================== USERS MANAGEMENT ====================

  /**
   * GET /admin/users
   * Lista todos os usuários com estatísticas
   */
  @Get('users')
  async getUsers(@Query() query: SearchQueryDto) {
    return this.adminService.getUsers(query);
  }

  /**
   * POST /admin/users
   * Cria um novo usuário
   */
  @Post('users')
  async createUser(@Body() body: CreateUserDto) {
    return this.adminService.createUser(body);
  }

  /**
   * PATCH /admin/users/:id
   * Atualiza um usuário
   */
  @Patch('users/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
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
  async getGroups(@Query() query: GroupsQueryDto) {
    return this.adminService.getGroups(query);
  }

  /**
   * GET /admin/groups/:id
   * Retorna detalhes completos de um grupo
   */
  @Get('groups/:id')
  async getGroupDetails(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.getGroupDetails(id);
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
  async getDraws(@Query() query: DrawsQueryDto) {
    return this.adminService.getDraws(query);
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
