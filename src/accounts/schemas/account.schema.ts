import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document; 

@Schema()
export class Account {
  @Prop({ required: true, unique: true })
  user_id: string;

  @Prop({ required: true })
  user_name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  birth_date: string;

  @Prop({ required: true })
  created_date: Date;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
