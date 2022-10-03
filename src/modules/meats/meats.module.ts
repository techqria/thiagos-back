import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeatsController } from 'src/controllers/meats/meats.controller';
import { Meats, MeatsSchema } from 'src/database/schemas/meats.schema';
import { MeatsService } from 'src/services/meats/meats.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Meats.name, schema: MeatsSchema }])],
    controllers: [MeatsController],
    providers: [MeatsService]
})
export class MeatsModule {}
