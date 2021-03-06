import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SHowHideDirective } from './directives/show-hide.directive';
import { AddStylesDirective } from './directives/add-styles.directive';
import { HostListenerDirective } from './directives/host-listener.directive';
import { HostBindingDirective } from './directives/host-binding.directive';
import { BoldDirective } from './directives/bold.directive';
import { StructDirective } from './directives/struct.directive';

import { BoldActiveHostDirective } from './directives/bold-active-host.directive';
import { BoldActiveDirective } from './directives/bold-active.directive';
import { BoldActive2Directive } from './directives/bold-active2.directive';
import { BoldInputDirective } from './directives/bold-input.directive';


import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { PageIfComponent } from './components/pages/page-if/page-if.component';
import { PageForComponent } from './components/pages/page-for/page-for.component';
import { PageSwitchComponent } from './components/pages/page-switch/page-switch.component';
import { PageCustomeComponent } from './components/pages/page-custome/page-custome.component';
import { PageCustome2Component } from './components/pages/page-custome2/page-custome2.component';

import { HomePageComponent } from './components/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SHowHideDirective,
    AddStylesDirective,
    HeaderComponent,
    SidebarComponent,
    PageIfComponent,
    PageForComponent,
    PageSwitchComponent,
    PageCustomeComponent,
    PageCustome2Component,
    HostListenerDirective,
    HostBindingDirective,
    StructDirective,
    BoldActiveHostDirective,
    BoldActiveDirective,
    BoldActive2Directive,
    BoldInputDirective,
    BoldDirective,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
