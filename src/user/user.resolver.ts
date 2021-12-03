import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from 'src/models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserService } from './user.service';

@Resolver(User.name)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { name: 'user' })
  getUser(@Args('uid') uid: string): User {
    return this.userService.getUser(uid);
  }

  @Query(() => [User], { name: 'users' })
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Mutation(() => User, { name: 'createUser' })
  createUser(@Args('data') createUserInput: CreateUserInput): User {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateUser(@Args('data') updateUserInput: UpdateUserInput): User {
    return this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  deleteUser(@Args('uid') uid: string): User {
    return this.userService.deleteUser(uid);
  }
}
