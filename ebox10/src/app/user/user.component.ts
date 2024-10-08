import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(public userService: UserService) {}
  users: User[] = [];
  ngOnInit() {
    this.users = this.userService.getUser();
    console.log(this.users);
  }
  //Fill your code here
}
