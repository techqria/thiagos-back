import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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
}
