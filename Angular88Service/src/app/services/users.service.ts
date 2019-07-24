import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users = ['Olha', 'Fedir', 'Lara', 'Simon']

  constructor() { }

  getUsers() {
    return this._users;
  }
  addUser(userName: string) {
    this._users.push(userName);
  }
}
