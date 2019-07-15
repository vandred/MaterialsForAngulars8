import { Component, OnInit } from '@angular/core';
import { Observable, ConnectableObservable, interval } from 'rxjs';
import { map, delay, take, retry, publish, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-hot-observable-connect',
  templateUrl: './hot-observable-connect.component.html'
})
export class HotObservableConnectComponent implements OnInit {
  source: ConnectableObservable<number>;

  constructor() {}

  ngOnInit() {
    this.source = interval(500)
      .pipe(take(20))
      .pipe(publish()) as ConnectableObservable<number>;

    this.source.connect(); // начать выдавать события, даже если еще нет подписчиков.
  }

  subscribe1() {
    this.source.subscribe(value => {
      console.log('Subscriber 1 received a value ' + value);
    });
  }

  subscribe2() {
    this.source.subscribe(value => {
      console.log('       Subscriber 2 received a value ' + value);
    });
  }
}
