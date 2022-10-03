import { Body, Controller, Get, Post } from '@nestjs/common';
import { Meats } from 'src/database/schemas/meats.schema';
import { MeatsService } from 'src/services/meats/meats.service';

@Controller('meats')
export class MeatsController {
    constructor(
        private readonly meatsService: MeatsService
    ) { }

    @Get('getAll')
    async getMeats(): Promise<Meats[]> {
        try {
            let response = await this.meatsService.getAll();
            
            return response
        } catch (e) {
            return e
        }
    }

    @Post('newMeat')
    async newMeat(@Body() meat: Meats) {
        try {
            let response = await this.meatsService.newMeat(meat);
            
            return response
        } catch (e) {
            return e
        }
    }
}
