import {Component} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {User} from './user';
import {AuthService} from './auth.service';

@Component({
  selector: 'login',
  template: require('./login.component.html')
})
export class LoginComponent {
  user: User = new User();

  constructor(
    private AuthService: AuthService,
    private uiRouter: UIRouter
  ) {}

  login() {
    this.AuthService.login(this.user)
      .then(token => this.continueWithLogin() )
      .catch(error => console.log(error));
  }

  private continueWithLogin() {
    this.uiRouter.stateService.go('dashboard');
  }
}
