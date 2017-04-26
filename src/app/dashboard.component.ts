import {Component} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {KataService} from './kata.service';
import {Kata} from './kata';

@Component({
  selector: 'dashboard',
  template: `
    <div>Welcome {{ user.username }}!</div>
    <div>Katas</div>
    <ul class="heroes">
      <li *ngFor="let kata of katas">
        <div>
          <div>
            <span class="kata-id">{{kata.id}}</span> {{kata.name}}
          </div>
          <div>
            <textarea style="width:473px; height:269px;">{{kata.description}}</textarea>
          </div>
        </div>
      </li>
    </ul>
  `
})
export class DashboardComponent {

  user: User;
  katas: Kata[];

  constructor(
    private userService: UserService,
    private kataService: KataService
  ) {
    this.user = userService.getUser();
    kataService.all().then(katas => this.katas = katas);
  }
}
