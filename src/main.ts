import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SERVER_PORT } from './config/constants';
import generateTypeormConfigFile from './common/scripts/generate-typeorm-config-file';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(
    process.env.DATABASE_HOST,
    process.env.DATABASE_PORT,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
  );
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const config = app.get(ConfigService);
  const port = parseInt(config.get(SERVER_PORT), 10) || 3000;
  generateTypeormConfigFile(config);
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .setTitle('API Demo')
    .setDescription('API para Demo')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  await app.listen(port);
  logger.log(`[ APP] host run in localhost:${port}`);
}
bootstrap();
