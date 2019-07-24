import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component implements OnInit {

  public subscribersValues: number[][] = [];
  public subscriberIndex = 0;
  public counter = 0;

  public subject = new Subject<number>();
  // public subject = new BehaviorSubject<number>(0);
  // public subject = new ReplaySubject<number>(Number.POSITIVE_INFINITY, 3000);
  // public subject = new AsyncSubject<number>();

  constructor() { }

  ngOnInit() {
  }

  emitValue() {
    ++this.counter;
    this.subject.next(this.counter);
  }

  complete() {
    this.subject.complete();
  }

  subscribe() {
    this.subscriberIndex++;
    const subscriberValues = [];
    this.subscribersValues.push(subscriberValues);
    this.subject.subscribe(value => subscriberValues.push(value));
  }

}
