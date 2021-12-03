import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  uid: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  bio: string;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  lastLoggedIn: Date;
}
