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
              'unpkg.com',
            ],
            scriptSrc: [
              `'self'`,
              `'unsafe-inline'`,
              'cdnjs.cloudflare.com',
              'cdn.jsdelivr.net',
              'unpkg.com',
            ],
            imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net', 'nestjs.com'],
            connectSrc: [`'self'`], // Permitir requisições AJAX para a própria API
            fontSrc: [`'self'`, 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net'],
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

    // Middleware para redirecionar assets do Swagger para CDN (necessário para Vercel serverless)
    expressApp.use('/api/docs', (req, res, next) => {
      // Mapear assets do Swagger para CDN
      const assetMap: Record<string, string> = {
        'swagger-ui-bundle.js': 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui-bundle.js',
        'swagger-ui-standalone-preset.js': 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js',
        'swagger-ui.css': 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui.css',
        'swagger-ui-init.js': 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui-init.js',
      };

      const fileName = req.path.split('/').pop() || '';
      if (assetMap[fileName]) {
        return res.redirect(302, assetMap[fileName]);
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
    
    // Configurar Swagger em um caminho interno (não exposto)
    // Isso gera o documento JSON mas não cria a rota HTML
    SwaggerModule.setup('api/swagger-internal', app, document, {
      customSiteTitle: 'API Amigo Oculto',
    });

    // Rota customizada para servir o HTML do Swagger com CDN
    expressApp.get('/api/docs', (req, res) => {
      const swaggerHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>API Amigo Oculto - Swagger</title>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui.css" />
  <link rel="icon" type="image/png" href="https://nestjs.com/img/logo-small.svg" />
  <style>
    html {
      box-sizing: border-box;
      overflow: -moz-scrollbars-vertical;
      overflow-y: scroll;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      margin:0;
      background: #fafafa;
    }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui-bundle.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function() {
      const ui = SwaggerUIBundle({
        url: '/api/docs-json',
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout",
        persistAuthorization: true
      });
    };
  </script>
</body>
</html>`;
      res.send(swaggerHtml);
    });

    // Rota para servir o JSON da documentação
    expressApp.get('/api/docs-json', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(document);
    });

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
