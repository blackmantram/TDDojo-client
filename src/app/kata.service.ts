import { Injectable } from '@angular/core';
import { Kata } from './kata';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KataService {

  private serviceURL = 'http://127.0.0.1:8000/katas/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,
  ) {}

  all(): Promise<Kata[]> {
    return this.http
              .get(this.serviceURL, {headers: this.headers})
              .toPromise()
              .then(response => response.json() as Kata[])
              .catch(this.handleError);
  }
  one(id: number): Promise<Kata> {
    return this.http
              .get(this.serviceURL + id, {headers: this.headers})
              .toPromise()
              .then(response => response.json() as Kata)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
