import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OnePageComponent } from './components/one-page/one-page.component';
import { Registration1Component } from './components/registrationform/01_registration/registration.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'one', component: OnePageComponent },
  { path: 'registration1', component: Registration1Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
