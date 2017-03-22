import {Component} from '@angular/core';
import {AuthChecker} from './auth-checker';

@Component({
  selector: 'app-header',
  template: require('./header.component.html')
})
export class HeaderComponent {

  isAuthenticated: Boolean = false;

  constructor(
    authService: AuthChecker
  ) {
    authService.authStatusChange.subscribe(status => this.isAuthenticated = status);
  }

}
