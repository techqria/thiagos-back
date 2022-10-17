import { Model } from 'mongoose';
import { Meats, MeatsDocument } from 'src/database/schemas/meats.schema';
export declare class MeatsService {
    private readonly meatsModel;
    constructor(meatsModel: Model<MeatsDocument>);
    getAll(): Promise<Meats[]>;
    getById(id: string): Promise<Meats>;
    newMeat(meat: Meats): Promise<Meats>;
    removeMeat(meatId: string): Promise<Meats>;
    updateMeat(id: string, meat: Meats): Promise<Meats>;
}
