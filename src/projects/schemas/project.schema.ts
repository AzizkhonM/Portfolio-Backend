import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
    @Prop()
    id: string;

    @Prop()
    title: string

    @Prop()
    image: string

    @Prop()
    link: string
}

export const ProjectSchema = SchemaFactory.createForClass(Project);