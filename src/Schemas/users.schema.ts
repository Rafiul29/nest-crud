
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type usersDocument = users & Document;

@Schema()
export class users {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const usersSchema = SchemaFactory.createForClass(users);
