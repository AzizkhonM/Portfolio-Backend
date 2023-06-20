import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  comment: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Post" })
  post_id: string;

  @Prop({ default: false })
  status: boolean
}

export const CommentSchema = SchemaFactory.createForClass(Comment);