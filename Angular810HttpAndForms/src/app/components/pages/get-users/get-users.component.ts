import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  values: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://iteahubangular7.azurewebsites.net/api/Values')
      .subscribe((resp: Array<string>) => {
        console.log('resp', resp);
        this.values = resp;
      });
  }



}
