import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  text: string

  @Prop()
  image: string;

  @Prop()
  short: string
}

export const PostSchema = SchemaFactory.createForClass(Post);