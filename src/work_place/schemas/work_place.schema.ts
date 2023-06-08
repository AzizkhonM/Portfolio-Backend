import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WorkPlaceDocument = HydratedDocument<WorkPlace>;

@Schema()
export class WorkPlace {
    @Prop()
    id: string;

    @Prop()
    place: string

    @Prop()
    post: string

    @Prop()
    start_year: number

    @Prop()
    end_year: number
}

export const WorkPlaceSchema = SchemaFactory.createForClass(WorkPlace);