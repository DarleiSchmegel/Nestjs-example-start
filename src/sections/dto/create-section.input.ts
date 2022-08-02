import { InputType, Field } from '@nestjs/graphql';
import { Date } from 'mongoose';

@InputType()
export class CreateSectionInput {
  @Field(() => String, { description: 'What type of event' })
  type: 'CIT' | 'CEG' | 'CEC' | 'ENPOS' | 'CIC';

  @Field(() => Date, { description: 'Start Date Time of Section' })
  startTime: Date;

  @Field(() => Date, { description: 'End Date Time of Section' })
  endTime: Date;
}
