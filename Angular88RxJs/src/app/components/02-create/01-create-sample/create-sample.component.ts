import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, from } from 'rxjs';
import { map, filter, scan, take } from 'rxjs/operators';

// Для того чтобы не подключать все необходимые операторы импортируйте Observable из rxjs/Rx
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-sample',
  templateUrl: './create-sample.component.html'
})
export class CreateSampleComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.clear();

    //var source = from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // создание потока на основе массива. Метод from выполняет необходимые конвертации для получения значений из массива
    // var source = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9); // создание потока на основе значений

    const source = interval(500).pipe(take(20)); // interval увеличивает число и помещает его в поток

    source
      // поток в котором находятся четные элементы
      .pipe(filter(x => x % 2 === 0))
      // поток в котором находятся измененные значения
      .pipe(map(x => x + '-'))
      .forEach(x => console.log(x)); // действия для каждого элемента в потоке
  }
}
