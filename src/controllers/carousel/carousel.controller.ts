import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ImageCarousel } from '../../database/schemas/image-carousel.dto';
import { CarouselService } from '../../services/carousel/carousel.service';

@Controller('carousel')
export class CarouselController {

    constructor(
        private readonly carouselService: CarouselService
    ) { }

    @Get('getAll')
    async getImages(): Promise<ImageCarousel[]> {
        try {
            let response = await this.carouselService.getAllImages();
            
            return response
        } catch (e) {
            return e
        }
    }

    @Post('new-image')
    async newImage(@Body() image: ImageCarousel): Promise<ImageCarousel> {
        try {
            let response = await this.carouselService.newImage(image);
            
            return response
        } catch (e) {
            return e
        }
    }

    
    @Post('remove-image/:id')
    async removeImage(@Param() param): Promise<ImageCarousel> {
        try {
            let response = await this.carouselService.removeImage(param.id);
            
            return response
        } catch (e) {
            return e
        }
    }
}
