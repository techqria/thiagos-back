import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meats, MeatsDocument } from 'src/database/schemas/meats.schema';

@Injectable()
export class MeatsService {
    
    constructor(@InjectModel(Meats.name) private readonly meatsModel: Model<MeatsDocument>) {}

    async getAll(): Promise<Meats[]> {
        return this.meatsModel.find()
    }

    async newMeat(meat: Meats): Promise<Meats> {
        const newMeat = new this.meatsModel(meat);
        return newMeat.save()
    }
}
