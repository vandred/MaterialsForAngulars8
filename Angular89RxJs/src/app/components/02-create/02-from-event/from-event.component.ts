import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent, of } from 'rxjs';
import {
  switchMap,
  map,
  filter,
  debounceTime,
  tap,
  switchAll
} from 'rxjs/operators';

// import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html'
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild('createBtn', { static: false })
  createButton: ElementRef; // ссылка на кнопку в шаблоне
  stream: Observable<any>;
  result: string = 'Result:';

  constructor() { }

  ngAfterViewInit() {
    // создание Observable на основе события click
    // подписчик будет уведомлен при каждом событии click
    this.stream = fromEvent(this.createButton.nativeElement, 'click');

    // Установка обработчика на потоке событий
    this.stream.subscribe(() => {
      this.result += '.';
    });
  }

  unsubscr() {
    // 
  }
}
