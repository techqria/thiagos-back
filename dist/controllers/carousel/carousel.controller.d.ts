import { ImageCarousel } from 'src/database/schemas/image-carousel.dto';
import { CarouselService } from 'src/services/carousel/carousel.service';
export declare class CarouselController {
    private readonly carouselService;
    constructor(carouselService: CarouselService);
    getImages(): Promise<ImageCarousel[]>;
    newImage(image: ImageCarousel): Promise<ImageCarousel>;
    removeImage(param: any): Promise<ImageCarousel>;
}
