import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Meats } from 'src/database/schemas/meats.schema';
import { MeatsService } from '../../services/meats/meats.service';

@Controller('meats')
export class MeatsController {
    constructor(
        private readonly meatsService: MeatsService,
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

    @Get('get-meat/:id')
    async getMeatById(@Param() param): Promise<Meats> {
        try {
            let response = await this.meatsService.getById(param.id);
            return response
        } catch (e) {
            return e
        }
    }

    @Post('new-meat')
    async newMeat(@Body() meat: Meats): Promise<Meats> {
        try {
            let response = await this.meatsService.newMeat(meat);
            
            return response
        } catch (e) {
            return e
        }
    }

    @Post('remove-meat/:id')
    async removeMeat(@Param() param): Promise<Meats> {
        try {
            let response = await this.meatsService.removeMeat(param.id);
            
            return response
        } catch (e) {
            return e
        }
    }

    @Put('update-meat/:id')
    async updateMeat(@Param() param, @Body() meat): Promise<Meats> {
        try {
            let response = await this.meatsService.updateMeat(param.id, meat);
            
            return response
        } catch (e) {
            return e
        }
    }
}
