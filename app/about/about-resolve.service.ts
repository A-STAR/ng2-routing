import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';


@Injectable()
export class AboutUsersResolve implements Resolve<User[]> {

  constructor (private userService: UserService) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getUsers()
      .then(users => users);
  }

}