import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageIfComponent } from './components/pages/page-if/page-if.component';
import { PageForComponent } from './components/pages/page-for/page-for.component';
import { PageSwitchComponent } from './components/pages/page-switch/page-switch.component';
import { PageCustomeComponent } from './components/pages/page-custome/page-custome.component';
import { PageCustome2Component } from './components/pages/page-custome2/page-custome2.component';
import { HostListenerDirective } from './directives/host-listener.directive';
import { HostBindingDirective } from './directives/host-binding.directive';
import { StructDirective } from './directives/struct.directive';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'ngif', component: PageIfComponent },
  { path: 'bind', component: PageForComponent },
  { path: 'ngcontent', component: PageSwitchComponent },
  { path: 'parent3', component: PageCustomeComponent },
  { path: 'interections', component: PageCustome2Component },
  { path: 'parent3/:id', component: HostListenerDirective },
  { path: 'lifecycle', component: HostBindingDirective },
  { path: 'viewchied', component: StructDirective },
  { path: 'contentchild', component: HomePageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
