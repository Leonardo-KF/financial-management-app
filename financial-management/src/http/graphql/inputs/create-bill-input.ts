import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBillInput {
  @Field()
  title: string;
  @Field()
  value: number;
  @Field()
  description: string;
  @Field()
  expiration: Date;
}
