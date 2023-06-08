import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type StudyPlaceDocument = HydratedDocument<StudyPlace>;

@Schema()
export class StudyPlace {
    @Prop()
    id: string;

    @Prop()
    place: string

    @Prop()
    faculty: string

    @Prop()
    start_year: number

    @Prop()
    end_year: number
}

export const StudyPlaceSchema = SchemaFactory.createForClass(StudyPlace);