import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {UIRouterModule} from 'ui-router-ng2';
import {HttpModule}    from '@angular/http';

import {routerConfig} from './routes.config';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {TitleComponent} from './title.component';
import {FooterComponent} from './footer.component';
import {WelcomeComponent} from './welcome.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import {DashboardComponent} from './dashboard.component';

import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {AuthChecker} from './auth-checker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot(routerConfig)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  providers: [ AuthService, UserService, AuthChecker ],
  bootstrap: [AppComponent]
})
export class AppModule {}
