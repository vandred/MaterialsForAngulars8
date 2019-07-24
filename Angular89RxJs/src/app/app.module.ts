import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntroModule } from './components/01-intro/intro.module';
import { CreateModule } from './components/02-create/create.module';
import { ObservableSamplesModule } from './components/03-observable-samples/observable-samples.module';
import { ServiceModule } from './components/04-service/service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntroModule,
    CreateModule,
    ObservableSamplesModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
