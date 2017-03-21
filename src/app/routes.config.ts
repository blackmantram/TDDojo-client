import {Injectable} from '@angular/core';
import {UIRouter, Ng2StateDeclaration, Transition} from 'ui-router-ng2';

import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import {WelcomeComponent} from './welcome.component';
import {DashboardComponent} from './dashboard.component';

import {AuthService} from './auth.service';

const STATES = [
  { name: 'login', url: '/login', component: LoginComponent },
  { name: 'register', url: '/register', component: RegisterComponent },
  { name: 'dashboard', url: '/dashboard', component: DashboardComponent, protectMe: true},
  { name: 'welcome', url: '/', component: WelcomeComponent }
];

function configure(router: UIRouter) {
  let criteria = { entering: (state) => state.protectMe };
  router.transitionService.onBefore(criteria, requireAuthentication);
}

function requireAuthentication(transition: Transition): any {
  let $state = transition.router.stateService;
  let authSvc = transition.injector().get(AuthService);
  return authSvc.checkAuthenticated().catch(() => $state.target('login'));
}

export let routerConfig = {
  otherwise: '/',
  states: STATES,
  config: configure
};
