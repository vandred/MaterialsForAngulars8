import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-anime-demo-one',
  templateUrl: './anime-demo-one.component.html',
  styleUrls: ['./anime-demo-one.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),

    trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),

    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),

    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AnimeDemoOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentState = 'initial';
  listItems = [];
  list_order = 1;

  addItem() {
    let listitem = "ListItem " + this.list_order;
    this.list_order++;
    this.listItems.push(listitem);
  }
  removeItem() {
    this.listItems.length -= 1;
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
