import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { CategoryComponent } from './components/category/category.component';
import { BookComponent } from './components/book/book.component';
import { SecureEnterComponent } from './components/secure-enter/secure-enter.component';
import { SecureExiteComponent } from './components/secure-exite/secure-exite.component';

@NgModule({
  declarations: [FirstPageComponent, CategoryComponent, BookComponent, SecureEnterComponent, SecureExiteComponent],
  imports: [
    CommonModule,
    FirstPageRoutingModule
  ]
})
export class FirstPageModule { }
