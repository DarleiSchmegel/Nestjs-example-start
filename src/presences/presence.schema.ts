import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Section } from '../sections/section.schema';
import { Inscribed } from '../inscribeds/inscribed.schema';

export type PresencesDocument = Presence & Document;

@Schema()
export class Presence {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inscribed',
    required: true,
  })
  inscribedId: Inscribed;
  @Prop()
  inscribed_cpf: string;

  @Prop()
  readDateTime: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Section',
    required: true,
  })
  sectionId: Section;

  @Prop()
  presenceType: 'presenter' | 'listener' | 'support';
}

export const PresenceSchema = SchemaFactory.createForClass(Presence);
