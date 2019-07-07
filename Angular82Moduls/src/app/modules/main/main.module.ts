import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PageBaseComponent } from './components/page-base/page-base.component';

@NgModule({
  declarations: [PageBaseComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
