import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Presence } from '../presences/presence.schema';

export type SectionDocument = Section & Document;

@Schema()
export class Section {
  @Prop()
  type: 'CIT' | 'CEG' | 'CEC' | 'ENPOS' | 'CIC';

  @Prop()
  startTime: Date;

  @Prop()
  endTime: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Presence' })
  section: Presence[];
}

export const SectionSchema = SchemaFactory.createForClass(Section);
