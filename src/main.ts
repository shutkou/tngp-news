import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'debug'],
  });

  app.useStaticAssets(join(__dirname, 'public'));
  app.setBaseViewsDir(join(__dirname, 'public'));
  console.log(`views path: ${join(__dirname, 'public')}`);
  app.setViewEngine('hbs');

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();
