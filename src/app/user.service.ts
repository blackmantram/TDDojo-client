import { Injectable } from '@angular/core';
import { User } from './user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  register(user:User): Promise<void> {
    console.log('register: '+user);
    return new Promise<void>((res,rej)=>res());
  }
  login(user:User): Promise<User> {
    console.log('login: '+user);
    return new Promise<User>((res,rej)=>res());
  }
}
