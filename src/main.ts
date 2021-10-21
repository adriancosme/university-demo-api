import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
  .setTitle('API Demo')
  .setDescription('API para Demo')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(AppModule.PORT);
  console.log(`[ API DOCS ] host run in ${AppModule.HTTP}://${AppModule.HOST}:${AppModule.PORT}/docs`,);
  console.log(`[ APP] host run in ${AppModule.HTTP}://${AppModule.HOST}`);
}
bootstrap();
