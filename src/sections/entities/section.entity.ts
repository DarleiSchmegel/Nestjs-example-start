import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Section {
  @Field(() => String, { description: 'Example field (placeholder)' })
  _id: string;

  @Field(() => String, {
    description: 'What type of event',
  })
  type: string;

  @Field(() => Date, { description: 'Start Date Time of Section' })
  startTime: Date;

  @Field(() => Date, { description: 'End Date Time of Section' })
  endTime: Date;
}
