import {Component} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'login',
  template: require('./login.component.html')
})
export class LoginComponent {
  user: User = new User();

  constructor(
    private userService:UserService
  ) {}

  login() {
    this.userService.login(this.user)
      .then(() => console.log('listo!!!'));
  }
}
