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

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
