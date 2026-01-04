import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import helmet from 'helmet';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  // Firebase Admin SDK agora é inicializado via AuthModule (firebase-admin.provider.ts)
  const app = await NestFactory.create(AppModule);

  // Segurança HTTP com Helmet
  app.use(helmet());

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

  // Habilitar CORS com configuração específica
  app.enableCors({
    origin: [
      'http://localhost:5000', // Desenvolvimento local
      'https://amigooculto.site', // Produção
      'https://www.amigooculto.site', // Produção com www
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });

  // Função para verificar autenticação básica do Swagger
  const swaggerBasicAuth = (req: Request, res: Response, next: NextFunction) => {
    const swaggerUser = process.env.SWAGGER_USER || 'admin';
    const swaggerPassword = process.env.SWAGGER_PASSWORD || 'admin123';

    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      res.setHeader('WWW-Authenticate', 'Basic realm="Swagger API Documentation"');
      return res.status(401).send('Acesso negado. Autenticação necessária.');
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');

    if (username === swaggerUser && password === swaggerPassword) {
      return next();
    }

    res.setHeader('WWW-Authenticate', 'Basic realm="Swagger API Documentation"');
    return res.status(401).send('Credenciais inválidas.');
  };

  // Aplicar autenticação básica nas rotas do Swagger
  app.use('/api/docs', swaggerBasicAuth);
  app.use('/api/docs-json', swaggerBasicAuth);

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
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`🚀 Aplicação rodando em: http://localhost:${port}`);
  console.log(
    `📚 Documentação disponível em: http://localhost:${port}/api/docs`,
  );
}
bootstrap();
