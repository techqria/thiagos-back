import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MeatsDocument = Meats & Document;

@Schema({collection: 'meats' })
export class Meats  {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  price: string;

  @Prop({ required: true, type: String })
  quantity: string;

  @Prop({ required: true, type: String })
  category: string;

  @Prop({ required: true, type: String })
  image: string;

  @Prop({ required: true, type: String })
  description: string;
}

export const MeatsSchema = SchemaFactory.createForClass(Meats);