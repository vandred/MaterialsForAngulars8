import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.params.subscribe(
      p =>
        console.log('Category params', p)
    );
  }

}
