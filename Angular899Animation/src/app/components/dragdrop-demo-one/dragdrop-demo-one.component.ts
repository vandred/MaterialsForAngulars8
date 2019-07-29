import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit, CdkDragStart, CdkDropList, CdkDrag }
  from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dragdrop-demo-one',
  templateUrl: './dragdrop-demo-one.component.html',
  styleUrls: ['./dragdrop-demo-one.component.css']
})
export class DragdropDemoOneComponent implements OnInit {
  items = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados'
  ];

  basket = [
    'Oranges',
    'Bananas',
    'Cucumbers'
  ];

  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
