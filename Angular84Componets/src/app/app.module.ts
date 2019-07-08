import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { LeftsideComponent } from './components/layouts/leftside/leftside.component';
import { PageStylesComponent } from './components/pages/page-styles/page-styles.component';
import { PageNgContentComponent } from './components/pages/page-ng-content/page-ng-content.component';
import { PageBindComponent } from './components/pages/page-bind/page-bind.component';
import { InterectionComponent } from './components/pages/page-interection/interection/interection.component';
import { ParentComponent } from './components/pages/page-interection/parent/parent.component';
import { ChildInputComponent } from './components/pages/page-interection/child-input/child-input.component';
import { ChildOutputComponent } from './components/pages/page-interection/child-output/child-output.component';
import { ChildBouthWayComponent } from './components/pages/page-interection/child-bouth-way/child-bouth-way.component';
import { ParentTwoComponent } from './components/pages/page-interection/parent-two/parent-two.component';
import { Parent3Component } from './components/pages/page-interection/parent3/parent3.component';
import { PageLifeCycleComponent } from './components/pages/page-life-cycle/page-life-cycle.component';
import { PageViewChildComponent } from './components/pages/page-view-child/page-view-child.component';
import { PageContentChildComponent } from './components/pages/page-content-child/page-content-child.component';
import { ChildComponent } from './components/pages/page-view-child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LeftsideComponent,
    PageStylesComponent,
    PageNgContentComponent,
    PageBindComponent,
    InterectionComponent,
    ParentComponent,
    ChildInputComponent,
    ChildOutputComponent,
    ChildBouthWayComponent,
    ParentTwoComponent,
    Parent3Component,
    PageLifeCycleComponent,
    PageViewChildComponent,
    PageContentChildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
