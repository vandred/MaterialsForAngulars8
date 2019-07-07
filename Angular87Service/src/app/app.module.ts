import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OnePageComponent } from './components/one-page/one-page.component';
import { TwoPageComponent } from './components/two-page/two-page.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { FormPageComponent } from './components/forms-page/form-page/form-page.component';
import { FormValidationPageComponent } from './components/forms-page/form-validation-page/form-validation-page.component';
import { ReactFormPageComponent } from './components/forms-page/react-form-page/react-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OnePageComponent,
    TwoPageComponent,
    ChildOneComponent,
    ChildTwoComponent,
    FormPageComponent,
    FormValidationPageComponent,
    ReactFormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
