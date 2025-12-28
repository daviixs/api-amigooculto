import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import helmet from 'helmet';

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
