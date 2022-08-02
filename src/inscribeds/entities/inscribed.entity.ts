import { ObjectType, Field } from '@nestjs/graphql';

import { Presence } from '../../presences/entities/presence.entity';

@ObjectType()
export class Inscribed {
  @Field(() => String, { description: 'Example field (placeholder)' })
  _id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  cpf: string;

  @Field(() => Presence, { description: 'Example field (placeholder)' })
  presencesId: Presence[];

  @Field(() => Date, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  dateTime: string;
}
