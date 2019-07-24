import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from 'src/app/shared/guards/chek-user.guard';

@Component({
  selector: 'app-secure-exite',
  templateUrl: './secure-exite.component.html',
  styleUrls: ['./secure-exite.component.css']
})
export class SecureExiteComponent implements OnInit, ComponentCanDeactivate {

  constructor() { }

  ngOnInit() {
  }

  canDeactivate() {
    if (true) {
      return confirm("Вы хотите покинуть страницу?");
    } else {
      return true;
    }
  }

}
