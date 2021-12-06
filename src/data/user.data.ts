import { User } from 'src/models/user.model';
import { posts } from './post.data';

export const users: User[] = [
  {
    uid: 'user101',
    username: 'anoop2010',
    password: 'anoop!192',
    name: 'Anoop Benzier',
    bio: 'Hey I use graphql',
    lastLoggedIn: new Date(),
    posts: [posts[0]],
  },
  {
    uid: 'user102',
    username: 'sanju678',
    password: 'sanju@8!192',
    name: 'Sanju',
    bio: 'Hey I use graphql',
    lastLoggedIn: new Date(),
    posts: [posts[1]],
  },
  {
    uid: 'user103',
    username: 'anu192',
    password: 'anu^21!192',
    name: 'Anu Rockzz',
    bio: 'Hey I use graphql',
    lastLoggedIn: new Date(),
    posts: [posts[2]],
  },
];
