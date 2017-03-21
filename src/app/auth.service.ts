import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user';
import { UserService } from './user.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private serviceURL = 'http://127.0.0.1:8000/auth/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,
    private userService: UserService
  ) {}

  register(user: User): Promise<void> {
    return this.http
              .post(this.serviceURL + 'register/', JSON.stringify(user), {headers: this.headers})
              .toPromise()
              .then(response => Promise.resolve())
              .catch(this.handleError);
  }
  login(user: User): Promise<void> {
    return this.http
              .post(this.serviceURL + 'login/', JSON.stringify(user), {headers: this.headers})
              .toPromise()
              .then(response => this.handleLogin(response.json().auth_token))
              .catch(this.handleError);
  }

  checkAuthenticated(): Promise<any> {
    return Promise.resolve('ok'); // this.handleError('user not authenticated');
  }

  private handleLogin(token: String): Promise<void> {
    return this.userService.retrieveUserInfo(token);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
