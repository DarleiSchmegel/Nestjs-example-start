import { CreateInscribedInput } from './create-inscribed.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInscribedInput extends PartialType(CreateInscribedInput) {
  @Field(() => Int)
  id: number;
}
