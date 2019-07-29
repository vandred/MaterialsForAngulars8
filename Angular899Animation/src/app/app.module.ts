import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeDemoOneComponent } from './components/anime-demo-one/anime-demo-one.component';
import { DragdropDemoOneComponent } from './components/dragdrop-demo-one/dragdrop-demo-one.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimeDemoOneComponent,
    DragdropDemoOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
