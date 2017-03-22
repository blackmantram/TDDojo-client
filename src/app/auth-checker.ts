import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthChecker {

  authStatusChange: EventEmitter<Boolean> = new EventEmitter();
  private isAuthenticated: Boolean = false;

  toggle() {
    this.isAuthenticated = !this.isAuthenticated;
    this.authStatusChange.emit(this.isAuthenticated);
  }

  checkAuthenticated(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.isAuthenticated) resolve();
      else reject();
    });
  }
}
