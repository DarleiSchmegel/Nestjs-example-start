import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInscribedInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  cpf: string;

  @Field(() => String, { description: 'Example section' })
  section: string;
}
