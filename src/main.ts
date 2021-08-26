import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { ServerFactory } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());

  app.use(helmet());

  app.connectMicroservice<MicroserviceOptions>(
    ServerFactory.create('database'),
  );
  await app.startAllMicroservices();

  app.use(cookieParser());
  await app.listen(3000);
}

bootstrap();
