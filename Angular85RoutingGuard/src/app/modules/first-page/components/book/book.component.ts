import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  dowehavebook = false;
  bookId: number;

  constructor(public activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.queryParams.subscribe(
      p =>
        console.log('Book query params', p)
    );

    this.activeroute.params.subscribe(
      p =>
        console.log('Book params', p)
    );
    this.activeroute.parent.params.subscribe(
      p =>
        console.log('Book parent params', p)
    );
  }

}
