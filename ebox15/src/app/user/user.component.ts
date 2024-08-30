import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  userObjList = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    //Fill your code
    this.userObjList = this.userService.getUserObjList();
  }
}
