import {Component} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'register',
  template: require('./register.component.html')
})
export class RegisterComponent {

  user:User = new User();

  constructor(
    private userService: UserService
  ) {}

  register() {
    this.userService.register(this.user)
      .then(() => console.log('listo!'));
  }
}
