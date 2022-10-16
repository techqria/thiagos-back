import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { User, UserSchema } from 'src/database/schemas/user.schema';
import { AuthService } from 'src/services/auth/auth.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
