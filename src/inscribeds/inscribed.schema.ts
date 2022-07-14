import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InscribedDocument = Inscribed & Document;

@Schema()
export class Inscribed {
  @Prop()
  cpf: string;

  @Prop()
  section: string;
}

export const InscribedSchema = SchemaFactory.createForClass(Inscribed);
