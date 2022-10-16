import { Meats } from 'src/database/schemas/meats.schema';
import { MeatsService } from 'src/services/meats/meats.service';
export declare class MeatsController {
    private readonly meatsService;
    constructor(meatsService: MeatsService);
    getMeats(): Promise<Meats[]>;
    newMeat(meat: Meats): Promise<Meats>;
    removeMeat(param: any): Promise<Meats>;
}
