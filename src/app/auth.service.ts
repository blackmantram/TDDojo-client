import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private serviceURL = 'http://127.0.0.1:8000/auth/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) {}

  register(user: User): Promise<User> {
    return this.http
              .post(this.serviceURL + 'register/', JSON.stringify(user), {headers: this.headers})
              .toPromise()
              .then(response => user)
              .catch(this.handleError);
  }
  login(user: User): Promise<String> {
    return this.http
              .post(this.serviceURL + 'login/', JSON.stringify(user), {headers: this.headers})
              .toPromise()
              .then(response => response.json().auth_token)
              .catch(this.handleError);
  }

  checkAuthenticated(): Promise<any> {
    return Promise.resolve('ok'); //this.handleError('user not authenticated');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
