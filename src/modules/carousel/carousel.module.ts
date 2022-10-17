import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarouselController } from 'src/controllers/carousel/carousel.controller';
import { ImageCarousel, ImageCarouselSchema } from 'src/database/schemas/image-carousel.dto';
import { CarouselService } from 'src/services/carousel/carousel.service';


@Module({
    imports: [MongooseModule.forFeature([{ name:ImageCarousel.name, schema: ImageCarouselSchema }])],
    controllers: [CarouselController],
    providers: [CarouselService]
})
export class ImageCarouselModule {}
