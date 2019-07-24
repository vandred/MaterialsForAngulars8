import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-for',
  templateUrl: './page-for.component.html',
  styleUrls: ['./page-for.component.css']
})
export class PageForComponent implements OnInit {

  items = [
    'Apple iPhone SX',
    'Huawei Mate 9',
    'Samsung Galaxy S10',
    'Motorola Moto Z'
  ];
  constructor() { }

  ngOnInit() {
  }

}
