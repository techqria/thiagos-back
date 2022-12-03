import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeatsController } from '../../controllers/meats/meats.controller';
import { Meats, MeatsSchema } from '../../database/schemas/meats.schema';
import { MeatsService } from '../../services/meats/meats.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Meats.name, schema: MeatsSchema }])],
    controllers: [MeatsController],
    providers: [MeatsService]
})
export class MeatsModule {}
