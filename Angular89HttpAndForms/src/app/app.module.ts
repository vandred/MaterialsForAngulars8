import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { Registration1Component } from './components/pages/01_registration/registration.component';
import { Registration2Component } from './components/pages/02_registration/registration.component';
import { Registration3Component } from './components/pages/03_registration/registration.component';
import { Registration4Component } from './components/pages/04_registration/registration.component';
import { Registration5Component } from './components/pages/05_registration/registration.component';
import { Registration6Component } from './components/pages/101_customValidator/registration.component';
import { Registration7Component } from './components/pages/102_asyncValidator/registration.component';
import { Registration8Component } from './components/pages/103_asyncValidatorDep/registration.component';
import { DynamicFormComponent } from './components/pages/dynamic-form/dynamic-form.component';
import { DynamicFormElementComponent } from './components/pages/dynamic-form/dynamic-form-element.component';
//
import { GetUsersComponent } from './components/pages/get-users/get-users.component';
import { PostUsersComponent } from './components/pages/post-users/post-users.component';
import { GetValuesComponent } from './components/pages/get-values/get-values.component';
import { PostValuesComponent } from './components/pages/post-values/post-values.component';
import { PutValuesComponent } from './components/pages/put-values/put-values.component';

@NgModule({
  declarations: [
    AppComponent,
    GetUsersComponent,
    PostUsersComponent,
    GetValuesComponent,
    PostValuesComponent,
    PutValuesComponent,
    Registration1Component,
    Registration2Component,
    Registration3Component,
    Registration4Component,
    Registration5Component,
    Registration6Component,
    Registration7Component,
    Registration8Component,
    DynamicFormComponent,
    DynamicFormElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
