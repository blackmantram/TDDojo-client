import {Component} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'dashboard',
  template: `
    Welcome {{ user.username }}!
  `
})
export class DashboardComponent {

  user: User;

  constructor(
    private userService: UserService
  ) {
    this.user = userService.getUser();
  }
}
