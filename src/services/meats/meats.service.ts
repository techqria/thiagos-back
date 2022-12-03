import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meats, MeatsDocument } from '../../database/schemas/meats.schema';

@Injectable()
export class MeatsService {
    
    constructor(@InjectModel(Meats.name) private readonly meatsModel: Model<MeatsDocument>) {}

    async getAll(): Promise<Meats[]> {
        return this.meatsModel.find()
    }

    async getById(id: string): Promise<Meats> {
        return this.meatsModel.findById(id)
    }

    async newMeat(meat: Meats): Promise<Meats> {
        const newMeat = new this.meatsModel(meat);
        return newMeat.save()
    }

    async removeMeat(meatId: string): Promise<Meats> {
        return await this.meatsModel.findByIdAndDelete(meatId) 
    }

    async updateMeat(id: string, meat: Meats): Promise<Meats> {
        const newMeat = await this.meatsModel.findByIdAndUpdate(id, meat);
        return newMeat.save()
    }
}
