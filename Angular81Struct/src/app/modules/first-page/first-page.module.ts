import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './components/first-page/first-page.component';

@NgModule({
  declarations: [FirstPageComponent],
  imports: [
    CommonModule,
    FirstPageRoutingModule
  ]
})
export class FirstPageModule { }
