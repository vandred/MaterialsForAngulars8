import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeHolderComponent } from './components/pipe-holder/pipe-holder.component';
import { DataFormatPipe } from './pipes/data-format.pipe';
import { IntegerPipe } from './pipes/integer.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { AsyncPipePipe } from './pipes/async-pipe.pipe';
import { AsyncPipe } from './pipes/async.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeHolderComponent,
    DataFormatPipe,
    IntegerPipe,
    PurePipe,
    ImpurePipe,
    AsyncPipePipe,
    AsyncPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
