import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
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
