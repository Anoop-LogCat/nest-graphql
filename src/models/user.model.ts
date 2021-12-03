import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  uid?: string;

  @Field()
  username?: string;

  @Field()
  password?: string;

  @Field()
  name?: string;

  @Field({ defaultValue: '' })
  bio?: string;

  @Field({ nullable: true })
  lastLoggedIn?: Date;
}
