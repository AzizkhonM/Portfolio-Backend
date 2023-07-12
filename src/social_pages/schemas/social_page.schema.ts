import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SocialPageDocument = HydratedDocument<SocialPage>;

@Schema()
export class SocialPage {
    @Prop()
    id: string;

    @Prop()
    site: string

    @Prop()
    username: string

    @Prop()
    color: string

    @Prop()
    icon: string

    @Prop()
    icon_color: string
}

export const SocialPageSchema = SchemaFactory.createForClass(SocialPage);