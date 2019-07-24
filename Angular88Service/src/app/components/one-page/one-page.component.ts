import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.css']
})
export class OnePageComponent implements OnInit {
  userName = '';

  constructor(public usersData: UsersService) { }

  ngOnInit() {
    console.log('One Page userData', this.usersData.getUsers());
  }
  saveUser() {
    if (this.userName !== '') {
      this.usersData.addUser(this.userName);
      console.log('One Page userData', this.usersData.getUsers());
      this.userName = '';
    }

  }

}
