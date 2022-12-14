import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaService } from '../src/prisma/prisma.service';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('Payment Tunnel')
    .setDescription('API for selling clothes online')
    .setVersion('0.1.0')
    .addTag('e-commerce')
    .build();
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(
    session({
      secret: process.env.sessionSecretKey,
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(4000);
}
bootstrap();
