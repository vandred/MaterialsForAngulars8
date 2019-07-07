import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPageRoutingModule } from './second-page-routing.module';
import { PageSecondMainComponent } from './components/page-second-main/page-second-main.component';

@NgModule({
  declarations: [PageSecondMainComponent],
  imports: [
    CommonModule,
    SecondPageRoutingModule
  ]
})
export class SecondPageModule { }
