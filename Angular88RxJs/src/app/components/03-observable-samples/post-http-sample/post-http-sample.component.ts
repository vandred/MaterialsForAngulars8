import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-http-sample',
  templateUrl: './post-http-sample.component.html',
  styleUrls: ['./post-http-sample.component.scss']
})
export class PostHttpSampleComponent implements OnInit {

  userForm: FormGroup;


  loginName: FormControl;
  password: FormControl;
  roles: FormControl;

  constructor(private _http: HttpClient ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.loginName = new FormControl();
    this.password = new FormControl();
    this.roles = new FormControl();
  }

  createForm() {
    this.userForm = new FormGroup({
      loginName: this.loginName,
      password: this.password,
      roles: this.roles,

    });
  }

  onSubmit() {
    console.log('this.UserForm.value', this.userForm.value);
    this._http
      .post('https://iteahubback.azurewebsites.net/api/Account/AddUser', this.userForm.value)
      .subscribe(x => {
        console.log('result', x);
      },
      error => console.error('error bad'));
  }

}
