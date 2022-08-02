import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Inscribed } from 'src/inscribeds/entities/inscribed.entity';
import { Section } from 'src/sections/entities/section.entity';

@ObjectType()
export class Presence {
  @Field(() => String, {
    description: 'Example field (placeholder)',
  })
  _id: string;

  @Field(() => Inscribed, {
    description: 'Example field (placeholder)',
  })
  inscribedId: Inscribed;

  @Field(() => Date, { description: 'Start Date Time of Section' })
  readDateTime: Date;

  @Field(() => String, { description: 'Example field (placeholder)' })
  inscribed_cpf: string;

  @Field(() => Section, { description: 'Example field (placeholder)' })
  sectionId: Section;

  @Field(() => String, { description: "'presenter' | 'listener' | 'support'" })
  presenceType: 'presenter' | 'listener' | 'support';

  // @Field(() => String, {
  //   description: 'Example field (placeholder)',
  // })
  // section_id: string;
}
