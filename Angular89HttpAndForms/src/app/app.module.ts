import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    PutValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
