import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Post } from './post.model';

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

  @Field((type) => [Post])
  posts: Post[];
}
