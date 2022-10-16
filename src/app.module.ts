import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeatsModule } from './modules/meats/meats.module';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import configuration from './config/configuration';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://qriatech:Qriatech%402022@cluster0.5sdralz.mongodb.net/ThiagosPrime'),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    MeatsModule
],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
