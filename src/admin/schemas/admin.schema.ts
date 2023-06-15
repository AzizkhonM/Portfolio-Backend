import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop()
  id: string;

  @Prop()
  first_name: string;

  @Prop()
  second_name: string;

  @Prop()
  image: string;

  @Prop({ unique: true })
  login: string;

  @Prop()
  hashed_password: string;

  @Prop()
  hashed_refresh_token: string;

}

export const AdminSchema = SchemaFactory.createForClass(Admin);