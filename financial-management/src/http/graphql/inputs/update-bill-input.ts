import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateBillInput {
  @Field({ nullable: true })
  title?: string;
  @Field()
  value: number;
  @Field({ nullable: true })
  description?: string;
  @Field()
  expiration: Date;
}
