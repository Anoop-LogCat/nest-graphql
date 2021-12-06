import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => ID)
  postId?: string;

  @Field()
  title?: string;

  @Field()
  description?: string;

  @Field({ defaultValue: 0 })
  like?: number;
}
