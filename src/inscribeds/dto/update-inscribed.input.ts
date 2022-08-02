import { CreateInscribedInput } from './create-inscribed.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreatePresenceInput } from '../../presences/dto/create-presence.input';

@InputType()
export class UpdateInscribedInput extends PartialType(CreateInscribedInput) {
  @Field(() => String)
  _id: string;
  @Field(() => String)
  presenceId: string;
}
