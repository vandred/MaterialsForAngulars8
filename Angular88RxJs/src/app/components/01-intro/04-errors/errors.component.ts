import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html'
})
export class ErrorsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.clear();

    // создание Observable
    let source = Observable.create(function(observer) {
      let id = setTimeout(function() {
        try {
          throw 'my error'; // исключение
        } catch (error) {
          observer.error(error);
        }
      }, 1500);

      console.log('started');

      return function() {
        console.log('dispose called');
        clearTimeout(id);
      };
    });

    let subject = source.subscribe(
      function(value) {
        // onNext
        console.log('next ' + value);
      },
      function(error) {
        // onError
        console.error('In subject ' + error);
      },
      function() {
        // onCompleted
        console.info('completed');
      }
    );
  }
}
