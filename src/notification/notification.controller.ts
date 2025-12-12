import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { NotificationService } from './notification.service';
import { EmailProvider } from '../email/email.provider';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly emailProvider: EmailProvider,
  ) {}

  @Get('my')
  @ApiOperation({
    summary: 'Listar minhas notificações',
    description:
      'Retorna as últimas 50 notificações do usuário ordenadas por data',
  })
  @ApiQuery({
    name: 'userId',
    required: true,
    description: 'ID do usuário',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de notificações',
    schema: {
      example: [
        {
          id: 1,
          userId: 1,
          groupId: 1,
          type: 'DRAW_RESULT',
          message:
            'O sorteio do grupo "Natal 2025" foi realizado! Veja quem você tirou.',
          read: false,
          createdAt: '2025-12-11T22:00:00.000Z',
        },
        {
          id: 2,
          userId: 1,
          groupId: 1,
          type: 'PARTICIPANT_JOINED',
          message: 'Maria Santos entrou no grupo "Natal 2025"',
          read: true,
          createdAt: '2025-12-10T15:00:00.000Z',
        },
        {
          id: 3,
          userId: 1,
          groupId: 2,
          type: 'GROUP_INVITE',
          message: 'Você foi convidado para o grupo "Ano Novo 2026"',
          read: false,
          createdAt: '2025-12-09T10:00:00.000Z',
        },
      ],
    },
  })
  async getMyNotifications(@Query('userId') userId: string) {
    return this.notificationService.getMyNotifications(Number(userId));
  }

  @Get('test-email')
  @ApiOperation({
    summary: 'Testar envio de email',
    description:
      'Endpoint de debug para testar a configuração SMTP e envio de emails. Envia um email de teste formatado.',
  })
  @ApiQuery({
    name: 'to',
    required: true,
    description: 'Email destinatário para receber o teste',
    example: 'teste@email.com',
  })
  @ApiResponse({
    status: 200,
    description: 'Email de teste enviado com sucesso',
    schema: {
      example: {
        success: true,
        message: 'Email de teste enviado com sucesso!',
        to: 'teste@email.com',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Erro ao conectar com servidor SMTP',
    schema: {
      example: {
        success: false,
        message: 'Falha ao conectar com servidor SMTP',
        tip: 'Verifique as variáveis de ambiente EMAIL_HOST, EMAIL_PORT, EMAIL_USER e EMAIL_PASS',
      },
    },
  })
  async testEmail(@Query('to') to: string) {
    // Testar conexão
    const connected = await this.emailProvider.testConnection();
    if (!connected) {
      return {
        success: false,
        message: 'Falha ao conectar com servidor SMTP',
        tip: 'Verifique as variáveis de ambiente EMAIL_HOST, EMAIL_PORT, EMAIL_USER e EMAIL_PASS',
      };
    }

    try {
      // Enviar email de teste
      await this.emailProvider.sendDrawResultEmail(
        to,
        'João Silva',
        'Maria Santos',
        'maria@email.com',
        '11999999999',
        [
          {
            name: 'Livro: Clean Code',
            description: 'Robert C. Martin',
            link: 'https://amazon.com.br/...',
          },
          { name: 'Fone Bluetooth', description: 'Preferência JBL' },
          { name: 'Cafeteira' },
        ],
        'Natal 2024 - Teste',
        50,
        150,
      );

      return {
        success: true,
        message: `Email de teste enviado com sucesso para ${to}`,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Erro ao enviar email',
        error: error.message,
      };
    }
  }
}
