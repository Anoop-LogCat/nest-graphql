import { ConflictException, Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { User } from 'src/models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  users: User[] = [
    {
      uid: 'user101',
      username: 'anoop2010',
      password: 'anoop!192',
      name: 'Anoop Benzier',
      bio: 'Hey I use graphql',
      lastLoggedIn: new Date(),
    },
    {
      uid: 'user102',
      username: 'sanju678',
      password: 'sanju@8!192',
      name: 'Sanju',
      bio: 'Hey I use graphql',
      lastLoggedIn: new Date(),
    },
    {
      uid: 'user103',
      username: 'anu192',
      password: 'anu^21!192',
      name: 'Anu Rockzz',
      bio: 'Hey I use graphql',
      lastLoggedIn: new Date(),
    },
  ];
  getUser(uid: string): User {
    const user = this.users.find((user) => uid === user.uid);
    if (user) {
      return user;
    } else {
      throw new ConflictException('Data fetch failed : Invalid uid');
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  createUser(createUserInput: CreateUserInput): User {
    const data = {
      uid: `user${randomInt(200)}`,
      username: createUserInput.username,
      password: createUserInput.password,
      name: createUserInput.name,
      lastLoggedIn: new Date(),
    };
    this.users.push(data);
    return data;
  }

  updateUser(updateUserInput: UpdateUserInput): User {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].uid === updateUserInput.uid) {
        const user = this.users[i];
        this.users[i] = {
          uid: user.uid,
          username: user.username,
          password: user.password,
          name: updateUserInput.name ?? user.name,
          bio: updateUserInput.bio ?? user.bio,
          lastLoggedIn: updateUserInput.lastLoggedIn ?? user.lastLoggedIn,
        };
        return this.users[i];
      }
    }
    throw new ConflictException('Updating failed : Invalid uid');
  }

  deleteUser(uid: string): User {
    const user = this.users.find((user) => uid === user.uid);
    if (user) {
      this.users = this.users.filter((obj) => obj !== user);
      return user;
    } else {
      throw new ConflictException('Deletion failed : Invalid uid');
    }
  }
}
