import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Bill {
  @Field(() => ID)
  id: number;
  @Field()
  title: string;
  @Field()
  value: number;
  @Field()
  description: string;
  @Field()
  expiration: Date;
}
