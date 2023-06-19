import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

@Schema()
export class Service {

    @Prop()
    id: string;

    @Prop()
    service: string

    @Prop()
    image: string

}

export const ServiceSchema = SchemaFactory.createForClass(Service);