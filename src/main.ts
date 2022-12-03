import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   const options = {
    origin: '*',
    allowedHeaders: '*',
    methods: "*",
    credentials: true
  };
  app.enableCors({
    origin: "*",
    allowedHeaders: '*',
    methods: "*",
    credentials: true,
});
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
