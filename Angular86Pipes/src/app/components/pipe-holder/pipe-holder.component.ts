import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-holder',
  templateUrl: './pipe-holder.component.html',
  styleUrls: ['./pipe-holder.component.css']
})
export class PipeHolderComponent implements OnInit {

  myDate = new Date(1988, 6, 19);
  welcome: string = "Hello World!";
  persentage: number = 0.14;
  pi: number = 3.1415;
  money: number = 44.29;

  constructor() { }

  ngOnInit() {
  }

}
