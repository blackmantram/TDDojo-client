import {Component} from '@angular/core';
import {UIRouter} from "ui-router-ng2";
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'register',
  template: require('./register.component.html')
})
export class RegisterComponent {

  user:User = new User();

  constructor(
    private userService: UserService,
    private uiRouter: UIRouter
  ) {}

  register() {
    this.userService.register(this.user)
      .then(() => this.uiRouter.stateService.go('login'));
  }
}
