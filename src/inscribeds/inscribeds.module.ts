import { Module } from '@nestjs/common';
import { InscribedsService } from './inscribeds.service';
import { InscribedsResolver } from './inscribeds.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Inscribed, InscribedSchema } from './inscribed.schema';
import { InscribedsController } from './inscribeds.controller';
import { Section, SectionSchema } from 'src/sections/section.schema';
import { Presence, PresenceSchema } from 'src/presences/presence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inscribed.name, schema: InscribedSchema },
      { name: Section.name, schema: SectionSchema },
      { name: Presence.name, schema: PresenceSchema },
    ]),
  ],
  controllers: [InscribedsController],
  providers: [InscribedsResolver, InscribedsService],
})
export class InscribedsModule {}
