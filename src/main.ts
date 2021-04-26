import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Sekolah Daring')
    .setDescription('Sekolah Daring API.')
    .setVersion('1.0.0')
    .addTag('Account')
    .addTag('Provinsi')
    .addTag('Kota')
    .addTag('Kecamatan')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3001);
}
bootstrap();
