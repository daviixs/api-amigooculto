import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Habilitar CORS
  app.enableCors();

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('API Amigo Oculto')
    .setDescription('API para gerenciamento de sorteios de Amigo Secreto')
    .setVersion('1.0')
    .addTag('users', 'Gerenciamento de usuários')
    .addTag('groups', 'Gerenciamento de grupos')
    .addTag('participants', 'Gerenciamento de participantes')
    .addTag('wishlists', 'Listas de desejos')
    .addTag('restrictions', 'Restrições de sorteio')
    .addTag('draw', 'Sorteio e resultados')
    .addTag('notifications', 'Notificações')
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
