import {Injectable} from '@angular/core';
import {UIRouter, Ng2StateDeclaration} from 'ui-router-ng2';

import {AppComponent} from './app.component';

export const STATES: Ng2StateDeclaration[] = [
  {
    name: 'App',
    url: '/',
    component: AppComponent
  }
];

@Injectable()
export class MyUIRouterConfig {
  static otherwise() {
    return 'App';
  }
}
