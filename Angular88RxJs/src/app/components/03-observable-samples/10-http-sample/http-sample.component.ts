import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-http-sample',
  templateUrl: './http-sample.component.html',
  styleUrls: ['./http-sample.component.css']
})
export class HttpSampleComponent {
  posts: string[] = [];

  constructor(private http: HttpClient) {}

  download() {
    this.posts = [];

    this.http
      .get('http://jsonplaceholder.typicode.com/posts/')
       // .pipe(map(response => response))
      // .pipe(filter<any>(post => post.userId === 5))
      //.pipe(map(post => post.body))
      .subscribe(post => {
       console.log('post', post);
       this.posts.push(post.toString());

      });
  }
}
