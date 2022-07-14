import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Inscribed {
  @Field(() => String, { description: 'Example field (placeholder)' })
  _id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  cpf: string;

  @Field(() => String, { description: 'Example section' })
  section: string;
}
