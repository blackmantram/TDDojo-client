import {Component} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

import {UserService} from './user.service';
import {AuthChecker} from './auth-checker';

@Component({
  selector: 'app-header',
  template: require('./header.component.html')
})
export class HeaderComponent {

  isAuthenticated: Boolean = false;

  constructor(
    private userService: UserService,
    private authChecker: AuthChecker,
    private uiRouter: UIRouter
  ) {
    authChecker.authStatusChange.subscribe(status => this.isAuthenticated = status);
  }

  logout() {
    this.userService.logout().then(
      () => this.uiRouter.stateService.go('welcome')
    ).catch(
      () => this.uiRouter.stateService.go('welcome')
    );
  }

}
