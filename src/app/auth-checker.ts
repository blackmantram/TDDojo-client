import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthChecker {

  private isAuthenticated: Boolean = false;
  authStatusChange: EventEmitter<Boolean> = new EventEmitter();

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
