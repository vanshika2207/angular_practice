import { Injectable } from '@angular/core';
import { users } from './user-list';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  getUser() {
    return users;
  }
}
