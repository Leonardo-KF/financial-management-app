import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Bill } from './bill';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => [Bill])
  bills: Bill[];
}
