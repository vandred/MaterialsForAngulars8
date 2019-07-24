import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-values',
  templateUrl: './post-values.component.html',
  styleUrls: ['./post-values.component.css']
})
export class PostValuesComponent implements OnInit {
  respons: string;
  postObject: PostClass = new PostClass();

  constructor(private http: HttpClient) {
    this.postObject.myInt = 0;
    this.postObject.value = 'Test';
  }

  ngOnInit() {
  }

  postData() {

    this.respons = 'start';
    console.log('postObject', this.postObject);
    this.http.post('https://iteahubangular7.azurewebsites.net/api/Values',
      this.postObject)
      .subscribe((resp: any) => {
        // console.log('resp', resp);
        // this.respons = resp;
      });
  }



}

class PostClass {
  myInt: number;
  value: string;
}
