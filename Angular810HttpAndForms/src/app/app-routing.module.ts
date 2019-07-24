import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Registration1Component } from './components/pages/01_registration/registration.component';
import { Registration2Component } from './components/pages/02_registration/registration.component';
import { Registration3Component } from './components/pages/03_registration/registration.component';
import { Registration4Component } from './components/pages/04_registration/registration.component';
import { Registration5Component } from './components/pages/05_registration/registration.component';
import { Registration6Component } from './components/pages/101_customValidator/registration.component';
import { Registration7Component } from './components/pages/102_asyncValidator/registration.component';
import { Registration8Component } from './components/pages/103_asyncValidatorDep/registration.component';
import { DynamicFormComponent } from './components/pages/dynamic-form/dynamic-form.component';
//
import { GetUsersComponent } from './components/pages/get-users/get-users.component';
import { PostUsersComponent } from './components/pages/post-users/post-users.component';
import { GetValuesComponent } from './components/pages/get-values/get-values.component';
import { PostValuesComponent } from './components/pages/post-values/post-values.component';
import { PutValuesComponent } from './components/pages/put-values/put-values.component';

const routes: Routes = [
  { path: 'registration1', component: Registration1Component },
  { path: 'registration2', component: Registration2Component },
  { path: 'registration3', component: Registration3Component },
  { path: 'registration4', component: Registration4Component },
  { path: 'registration5', component: Registration5Component },
  { path: 'registration6', component: Registration6Component },
  { path: 'registration7', component: Registration7Component },
  { path: 'registration8', component: Registration8Component },
  { path: 'registrationdynamo', component: DynamicFormComponent },
  { path: 'GetValues', component: GetUsersComponent },
  { path: 'PostUsers', component: PostUsersComponent },
  { path: 'GetValues1', component: GetValuesComponent },
  { path: 'PostValues', component: PostValuesComponent },
  { path: 'PutValues', component: PutValuesComponent }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
