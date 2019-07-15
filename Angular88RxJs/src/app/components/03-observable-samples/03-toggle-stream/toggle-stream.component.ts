import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  Observable,
  Subject,
  asapScheduler,
  pipe,
  of,
  from,
  merge,
  fromEvent,
  SubscriptionLike,
  PartialObserver
} from 'rxjs';
import { map, filter, scan, flatMap, takeUntil } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-toggle-stream',
  templateUrl: './toggle-stream.component.html'
})
export class ToggleStreamComponent implements AfterViewInit {
  output: string = '';
  @ViewChild('toggleBtn', { static: false })
  toggleBtn: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    let toggleStream = fromEvent<Event>(
      this.toggleBtn.nativeElement,
      'change'
    ).pipe(map(x => (x.target as HTMLInputElement).checked));

    let dashGeneratorStream = interval(500).pipe(map(() => '-'));

    let resultStream = toggleStream
      .pipe(filter(x => x === true))
      //.dashGeneratorStream.pipe(takeUntil(toggleStream)) поток dashGeneratorStream будет выдавать события до тех пор пока поток toggleStream не выдаст события, после чего поток resultStream не будет выдавать событий до повторного события от потока toggleStream
      .pipe(flatMap(() => dashGeneratorStream.pipe(takeUntil(toggleStream))));

    resultStream.subscribe(x => (this.output += x));
  }
}
