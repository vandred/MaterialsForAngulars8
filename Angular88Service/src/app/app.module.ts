import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OnePageComponent } from './components/one-page/one-page.component';
import { TwoPageComponent } from './components/two-page/two-page.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';

import { UsersService } from './services/users.service';
import { Registration1Component } from './components/registrationform/01_registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OnePageComponent,
    TwoPageComponent,
    ChildOneComponent,
    ChildTwoComponent,
    Registration1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
