import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes.config';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {TitleComponent} from './title.component';
import {FooterComponent} from './footer.component';

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: STATES, otherwise: MyUIRouterConfig.otherwise()})
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
