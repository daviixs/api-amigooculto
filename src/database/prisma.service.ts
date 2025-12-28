import { Injectable, OnModuleInit, Logger, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private pool: Pool;

  constructor() {
    // Validar connectionString antes de qualquer coisa (sem usar this)
    const connectionString = process.env.DATABASE_URL;
    
    if (!connectionString) {
      console.error('[PrismaService] DATABASE_URL não está definida nas variáveis de ambiente');
      throw new Error('DATABASE_URL não está definida nas variáveis de ambiente');
    }

    try {
      // Criar pool e adapter usando variáveis locais (antes de super())
      const pool = new Pool({ 
        connectionString,
        // Configurações para melhorar a conexão no Vercel
        max: 1, // Limitar conexões no ambiente serverless
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000,
      });
      const adapter = new PrismaPg(pool);
      
      // Chamar super() primeiro (obrigatório em TypeScript)
      super({ adapter });
      
      // Agora podemos usar this
      this.pool = pool;
      this.logger.log('PrismaService inicializado');
    } catch (error) {
      // Usar console.error porque ainda não podemos usar this.logger
      console.error('[PrismaService] Erro ao criar pool de conexão do Prisma:', error);
      throw error;
    }
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Prisma conectado ao banco de dados com sucesso');
    } catch (error) {
      this.logger.error('❌ Erro ao conectar Prisma ao banco de dados:', error);
      // Não lançar erro aqui para evitar que a aplicação falhe completamente
      // A conexão será tentada novamente na primeira query
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      await this.pool.end();
      this.logger.log('Prisma desconectado do banco de dados');
    } catch (error) {
      this.logger.error('Erro ao desconectar Prisma:', error);
    }
  }
}
