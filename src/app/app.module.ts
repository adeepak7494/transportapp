import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewrideComponent } from './newride/newride.component';
import { PickrideComponent } from './pickride/pickride.component';
import {SidebarModule} from 'primeng/sidebar';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewrideComponent,
    PickrideComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
