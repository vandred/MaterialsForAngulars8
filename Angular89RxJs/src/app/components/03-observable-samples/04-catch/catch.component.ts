import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { map, delay, take, retry, catchError, retryWhen } from 'rxjs/operators';
@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html'
})
export class CatchComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    var source = of(1, 2, 3, 4, 5, 6)
      .pipe(
        map(x => {
          if (x == 4) throw 'error';
          return x;
        })
      )
      // .pipe(catchError(() => of("error text"))); // обработка исключения
      // .pipe(retry(3)); // попытаться перезапустить Observable укзанное количество раз
      .pipe(retryWhen(err => err.pipe(delay(1000)).pipe(take(3)))); // перезапустить с интервалом в 1 сек. три раза

    source.subscribe(
      x => console.log(x),
      error => console.error(error),
      () => console.log('done')
    );
  }
}
