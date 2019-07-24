import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.clear();

    // Subject - объект который работает как Observer и Observable одновременно.
    // http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html

    const subject = new ReplaySubject();

    const subscription = subject.subscribe(
      r => console.log('result', r),
      e => console.error(e),
      () => console.log('completed')
    );

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.complete();

    subscription.unsubscribe();
  }
}
