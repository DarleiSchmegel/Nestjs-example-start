import { InputType, Field } from '@nestjs/graphql';

import { CreatePresenceInput } from '../../presences/dto/create-presence.input';
@InputType()
export class CreateInscribedInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  cpf: string;

  // @Field(() => CreatePresenceInput, {
  //   description: 'Example field (placeholder)',
  // })
  // presences: CreatePresenceInput[];
}
