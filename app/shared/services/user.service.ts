import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../mocks/users';

const usersPromise: Promise<User[]> = Promise.resolve(USERS);


@Injectable()
export class UserService {

  getUsers(): Promise<User[]> {
    return usersPromise;
  }

  getUser(username): Promise<User> {
    let user = usersPromise
      .then(
        users =>
          users.find(user => user.username == username)
      );
    
    return user;
  }

}