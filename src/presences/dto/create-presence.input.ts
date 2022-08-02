import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePresenceInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  inscribedId: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  inscribed_cpf: string;

  @Field(() => String, { description: 'Example section' })
  sectionId: string;

  @Field(() => Date, { description: 'Example field (placeholder)' })
  dateTime: string;

  @Field(() => String, { description: 'Example section' })
  presenceType: 'presenter' | 'listener' | 'support';
}
