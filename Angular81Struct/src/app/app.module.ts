import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterSharedModule } from './shared/modules/mater-shared/mater-shared.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
