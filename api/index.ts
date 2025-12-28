import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from '../src/common/filters/all-exceptions.filter';
import helmet from 'helmet';
import express from 'express';

let cachedApp: any;
let isInitializing = false;
let initializationError: Error | null = null;

async function bootstrap() {
  // Retornar app em cache se já estiver inicializado
  if (cachedApp) {
    return cachedApp;
  }

  // Se já estiver inicializando, aguardar
  if (isInitializing) {
    while (isInitializing) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    if (initializationError) {
      throw initializationError;
    }
    return cachedApp;
  }

  isInitializing = true;
  initializationError = null;

  try {
    console.log('[Vercel] Iniciando bootstrap da aplicação NestJS...');

    const expressApp = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
      {
        logger: ['error', 'warn'],
      },
    );

    // Segurança HTTP com Helmet - configurado para permitir Swagger
    app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: [`'self'`],
            styleSrc: [
              `'self'`,
              `'unsafe-inline'`,
              'cdnjs.cloudflare.com',
              'cdn.jsdelivr.net',
            ],
            scriptSrc: [
              `'self'`,
              `'unsafe-inline'`,
              'cdnjs.cloudflare.com',
              'cdn.jsdelivr.net',
            ],
            imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net'],
          },
        },
      }),
    );

    // Filtro global de exceções
    app.useGlobalFilters(new AllExceptionsFilter());

    // Validação global
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    // Habilitar CORS
    app.enableCors();

    // Middleware para ignorar requests de assets do Swagger (serão carregados do CDN)
    // Usar função de middleware que verifica o path manualmente (não usar * no padrão de rota)
    expressApp.use((req, res, next) => {
      // Verificar se o path começa com /api/docs/ e contém extensões de arquivo
      if (req.path.startsWith('/api/docs/')) {
        if (
          req.path.includes('.js') ||
          req.path.includes('.css') ||
          req.path.includes('.png') ||
          req.path.includes('.svg') ||
          req.path.includes('.ico')
        ) {
          return res.status(204).end(); // No Content - ignora silenciosamente
        }
      }
      next();
    });

    // Configurar Swagger
    const config = new DocumentBuilder()
      .setTitle('API Amigo Oculto')
      .setDescription('API para gerenciamento de sorteios de Amigo Secreto')
      .setVersion('1.0')
      .addTag('auth', 'Autenticação e autorização')
      .addTag('users', 'Gerenciamento de usuários')
      .addTag('groups', 'Gerenciamento de grupos')
      .addTag('participants', 'Gerenciamento de participantes')
      .addTag('wishlists', 'Listas de desejos')
      .addTag('restrictions', 'Restrições de sorteio')
      .addTag('draw', 'Sorteio e resultados')
      .addTag('notifications', 'Notificações')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customCssUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui.min.css',
      customJs: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-bundle.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.0/swagger-ui-standalone-preset.min.js',
      ],
      customfavIcon: 'https://nestjs.com/img/logo-small.svg',
      customSiteTitle: 'API Amigo Oculto',
    });

    console.log('[Vercel] Inicializando módulos do NestJS...');
    await app.init();

    console.log('[Vercel] ✅ Aplicação inicializada com sucesso');

    cachedApp = expressApp;
    return expressApp;
  } catch (error) {
    console.error('[Vercel] ❌ Erro durante inicialização:', error);
    initializationError = error instanceof Error ? error : new Error(String(error));
    throw initializationError;
  } finally {
    isInitializing = false;
  }
}

export default async (req: any, res: any) => {
  try {
    const app = await bootstrap();
    
    // Garantir que a resposta seja sempre enviada
    // Adicionar timeout para evitar que a função fique travada
    const timeout = setTimeout(() => {
      if (!res.headersSent) {
        console.error('[Vercel] ⚠️ Timeout: resposta não foi enviada a tempo');
        res.status(504).json({
          statusCode: 504,
          message: 'Gateway Timeout - A requisição demorou muito para processar',
          error: 'Gateway Timeout',
        });
      }
    }, 28000); // 28 segundos (Vercel tem timeout de 30s no plano Hobby)

    // Remover timeout se a resposta for enviada
    const originalEnd = res.end;
    res.end = function (...args: any[]) {
      clearTimeout(timeout);
      return originalEnd.apply(this, args);
    };

    app(req, res);
  } catch (error) {
    console.error('[Vercel] ❌ Erro no handler:', error);
    
    // Garantir que sempre retornamos uma resposta, mesmo em caso de erro
    if (!res.headersSent) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      res.status(500).json({
        statusCode: 500,
        message: 'Erro interno do servidor durante inicialização',
        error: 'Internal Server Error',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      });
    }
  }
};
