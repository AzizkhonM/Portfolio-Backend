import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SkillDocument = HydratedDocument<Skill>;

@Schema()
export class Skill {
    @Prop()
    id: string;

    @Prop()
    skill: string

    @Prop()
    image: string
}

export const SkillSchema = SchemaFactory.createForClass(Skill);