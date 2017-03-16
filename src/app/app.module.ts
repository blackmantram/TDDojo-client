import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {UIRouterModule} from 'ui-router-ng2';

import {STATES, OTHERWISE} from './routes.config';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {TitleComponent} from './title.component';
import {FooterComponent} from './footer.component';
import {WelcomeComponent} from './welcome.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import {UserService} from './user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({states: STATES, otherwise: OTHERWISE})
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
