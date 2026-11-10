import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Caffe Cool example')
    .setDescription('The Caffe Cool API description')
    .setVersion('1.0')
    .addTag('Cafee Cool')
  .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const corsOrigin = process.env.CORS_ORIGIN;
  app.enableCors(
    corsOrigin
      ? { origin: corsOrigin.split(',').map((o) => o.trim()) }
      : undefined,
  );

  const port = Number(process.env.PORT) || 3001;
  await app.listen(port);
}
bootstrap();
