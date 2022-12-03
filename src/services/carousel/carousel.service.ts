import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImageCarousel, ImageCarouselDocument } from '../../database/schemas/image-carousel.dto';

@Injectable()
export class CarouselService {

    constructor(@InjectModel(ImageCarousel.name) private readonly imagesModel: Model<ImageCarouselDocument>) {}

    async getAllImages(): Promise<ImageCarousel[]> {
        return this.imagesModel.find()
    }
    async newImage(image: ImageCarousel): Promise<ImageCarousel> {
        const newImage = new this.imagesModel(image);
        return newImage.save()
    }

    async removeImage(imageId: string): Promise<ImageCarousel> {
        return await this.imagesModel.findByIdAndDelete(imageId) 
    }
}
