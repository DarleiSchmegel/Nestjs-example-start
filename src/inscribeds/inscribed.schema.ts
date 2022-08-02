import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Presence } from 'src/presences/presence.schema';

export type InscribedDocument = Inscribed & Document;

@Schema()
export class Inscribed {
  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Presence',
        required: false,
      },
    ],
  })
  presencesId: Presence[];
}

export const InscribedSchema = SchemaFactory.createForClass(Inscribed);
