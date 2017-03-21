import {Component} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import {User} from './user';
import {AuthService} from './auth.service';

@Component({
  selector: 'register',
  template: require('./register.component.html')
})
export class RegisterComponent {

  user: User = new User();

  constructor(
    private AuthService: AuthService,
    private uiRouter: UIRouter
  ) {}

  register() {
    this.AuthService.register(this.user)
      .then(() => this.uiRouter.stateService.go('login'));
  }
}
