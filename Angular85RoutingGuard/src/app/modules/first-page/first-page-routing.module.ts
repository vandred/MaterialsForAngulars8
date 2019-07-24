import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { CategoryComponent } from './components/category/category.component';
import { BookComponent } from './components/book/book.component';
import { SecureEnterComponent } from './components/secure-enter/secure-enter.component';
import { SecureExiteComponent } from './components/secure-exite/secure-exite.component';
import { ChekUserGuard } from '../../shared/guards/chek-user.guard'
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'enter', component: SecureEnterComponent, canActivate: [ChekUserGuard] },
  { path: 'exite', component: SecureExiteComponent, canDeactivate: [ChekUserGuard] },
  {
    path: 'category/:catId', component: CategoryComponent, children: [
      { path: 'book', component: BookComponent },
      { path: 'book/:bookid', component: BookComponent },
      //{ path: 'book/:bookid/:catId', component: BookComponent },
      // { path: '**', component: FirstPageComponent }
    ]
  },
  {
    path: 'category', component: CategoryComponent, children: [
      { path: 'book', component: BookComponent },
      { path: 'book/:bookid', component: BookComponent },
      { path: '**', component: FirstPageComponent }
    ]
  },

  { path: 'book', component: BookComponent },
  { path: '**', component: FirstPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstPageRoutingModule { }
