import { Module } from '@nestjs/common';
import { PresencesService } from './presences.service';
import { PresencesResolver } from './presences.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Presence, PresenceSchema } from './presence.schema';

import { Section, SectionSchema } from '../sections/section.schema';
import { SectionsResolver } from 'src/sections/sections.resolver';
import { SectionsService } from 'src/sections/sections.service';
import { Inscribed, InscribedSchema } from 'src/inscribeds/inscribed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Presence.name, schema: PresenceSchema },
      { name: Section.name, schema: SectionSchema },
      { name: Inscribed.name, schema: InscribedSchema },
    ]),
  ],
  providers: [
    PresencesResolver,
    PresencesService,
    SectionsResolver,
    SectionsService,
  ],
})
export class PresencesModule {}
