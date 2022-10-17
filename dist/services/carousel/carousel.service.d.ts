import { Model } from 'mongoose';
import { ImageCarousel, ImageCarouselDocument } from 'src/database/schemas/image-carousel.dto';
export declare class CarouselService {
    private readonly imagesModel;
    constructor(imagesModel: Model<ImageCarouselDocument>);
    getAllImages(): Promise<ImageCarousel[]>;
    newImage(image: ImageCarousel): Promise<ImageCarousel>;
    removeImage(imageId: string): Promise<ImageCarousel>;
}
