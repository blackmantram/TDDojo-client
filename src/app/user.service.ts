import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Headers } from '@angular/http';
import { AuthChecker } from './auth-checker';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private serviceURL = 'http://127.0.0.1:8000/auth/';
  private headers = new Headers({'Content-Type': 'application/json'});

  private token: String = '';
  private user: User;

  constructor(
    private http: Http,
    private authChecker: AuthChecker
  ) {}

  retrieveUserInfo(token: String): Promise<void> {
    this.token = token;
    return this.http
              .get(this.serviceURL + 'me/', {headers: this.getHeaders()})
              .toPromise()
              .then(response => {
                this.authChecker.toggle();
                this.user = response.json() as User;
                return Promise.resolve();
              })
              .catch(this.handleError);
  }

  logout(): Promise<void> {
    return this.http
              .post(this.serviceURL + 'logout/', {}, {headers: this.headers})
              .toPromise()
              .then(response => {
                this.authChecker.toggle();
                return Promise.resolve();
              })
              .catch(this.handleError);
  }

  getUser(): User {
    return this.user;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private getHeaders(): Headers {
    let headers: Headers = this.headers;
    headers.append('Authorization', 'Token ' + this.token);
    return headers;
  }
}
