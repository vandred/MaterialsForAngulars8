import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    this.respons = 'start';

    console.log('postObject', this.postObject);

    this.http.post<PostClass>('https://iteahubangular7.azurewebsites.net/api/Values',
      this.postObject, httpOptions)
      .subscribe((resp: any) => {
        console.log('resp', resp);
        // this.respons = resp;
      });
  }



}

class PostClass {
  myInt: number;
  value: string;
}
