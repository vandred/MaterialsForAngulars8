import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageStylesComponent } from './components/pages/page-styles/page-styles.component';
import { PageNgContentComponent } from './components/pages/page-ng-content/page-ng-content.component';
import { PageBindComponent } from './components/pages/page-bind/page-bind.component';
import { InterectionComponent } from './components/pages/page-interection/interection/interection.component';

import { Parent3Component } from './components/pages/page-interection/parent3/parent3.component';
import { PageLifeCycleComponent } from './components/pages/page-life-cycle/page-life-cycle.component';
import { PageViewChildComponent } from './components/pages/page-view-child/page-view-child.component';
import { PageContentChildComponent } from './components/pages/page-content-child/page-content-child.component';

const routes: Routes = [
  { path: 'style', component: PageStylesComponent },
  { path: 'bind', component: PageBindComponent },
  { path: 'ngcontent', component: PageNgContentComponent },
  { path: 'interections', component: InterectionComponent },
  { path: 'parent3', component: Parent3Component },
  { path: 'parent3/:id', component: Parent3Component },
  { path: 'lifecycle', component: PageLifeCycleComponent },
  { path: 'viewchied', component: PageViewChildComponent },
  { path: 'contentchild', component: PageContentChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
