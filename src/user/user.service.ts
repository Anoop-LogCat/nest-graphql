import { ConflictException, Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { users } from 'src/data/user.data';
import { User } from 'src/models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  getUser(uid: string): User {
    const user = users.find((user) => uid === user.uid);
    if (user) {
      return user;
    } else {
      throw new ConflictException('Data fetch failed : Invalid uid');
    }
  }

  getUsers(): User[] {
    return users;
  }

  createUser(createUserInput: CreateUserInput): User {
    const data = {
      uid: `user${randomInt(200)}`,
      username: createUserInput.username,
      password: createUserInput.password,
      name: createUserInput.name,
      lastLoggedIn: new Date(),
      posts: [],
    };
    users.push(data);
    return data;
  }

  updateUser(updateUserInput: UpdateUserInput): User {
    for (let i = 0; i < users.length; i++) {
      if (users[i].uid === updateUserInput.uid) {
        const user = users[i];
        users[i] = {
          uid: user.uid,
          username: user.username,
          password: user.password,
          name: updateUserInput.name ?? user.name,
          bio: updateUserInput.bio ?? user.bio,
          lastLoggedIn: updateUserInput.lastLoggedIn ?? user.lastLoggedIn,
          posts: user.posts,
        };
        return users[i];
      }
    }
    throw new ConflictException('Updating failed : Invalid uid');
  }

  deleteUser(uid: string): User {
    const user = users.find((user) => uid === user.uid);
    if (user) {
      //users = users.filter((obj) => obj !== user);
      return user;
    } else {
      throw new ConflictException('Deletion failed : Invalid uid');
    }
  }
}
