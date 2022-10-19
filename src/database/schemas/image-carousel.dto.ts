import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageCarouselDocument = ImageCarousel & Document;

@Schema({collection: 'image-carousel' })
export class ImageCarousel  {
  @Prop({ required: true, type: String })
  image: string;

  @Prop({ required: true, type: String })
  link: string;

  @Prop({ required: true, type: String })
  text: string;
}

export const ImageCarouselSchema = SchemaFactory.createForClass(ImageCarousel);