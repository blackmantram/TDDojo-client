import {Injectable} from '@angular/core';
import {UIRouter, Ng2StateDeclaration} from 'ui-router-ng2';

import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import {WelcomeComponent} from './welcome.component';

export const STATES: Ng2StateDeclaration[] = [
  { name: 'login', url: '/login', component: LoginComponent },
  { name: 'register', url: '/register', component: RegisterComponent },
  { name: 'welcome', url: '/', component: WelcomeComponent }
];

export const OTHERWISE = '/';
