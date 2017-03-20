import {Component} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'login',
  template: require('./login.component.html')
})
export class LoginComponent {
  user: User = new User();

  constructor(
    private userService: UserService,
    private uiRouter: UIRouter
  ) {}

  login() {
    this.userService.login(this.user)
      .then(token => this.continueWithLogin(token) );
  }

  private continueWithLogin(token: String) {
    this.uiRouter.stateService.go('dashboard');
  }
}
