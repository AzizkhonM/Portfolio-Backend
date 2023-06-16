import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

@Schema()
export class Service {

    @Prop()
    id: string;

    @Prop()
    service: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Image" })
    image_id: string

}

export const ServiceSchema = SchemaFactory.createForClass(Service);