import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateInscribedInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  filter: string;

  // @Field(() => CreatePresenceInput, {
  //   description: 'Example field (placeholder)',
  // })
  // presences: CreatePresenceInput[];
}
