import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeatsModule } from './modules/meats/meats.module';
import { AuthModule } from './modules/auth/auth.module';
import configuration from './config/configuration';
import { ImageCarouselModule } from './modules/carousel/carousel.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://qriatech:Qriatech%402022@cluster0.5sdralz.mongodb.net/ThiagosPrime'),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    MeatsModule,
    AuthModule,
    ImageCarouselModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
