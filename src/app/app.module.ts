import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewrideComponent } from './newride/newride.component';
import { PickrideComponent } from './pickride/pickride.component';
import {SidebarModule} from 'primeng/sidebar';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NewrideComponent,
    PickrideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SidebarModule,
    CardModule,
    ButtonModule,
    SplitterModule,
    DropdownModule,
    PanelModule,
    TableModule,
    DialogModule,
    DynamicDialogModule,
    ToastModule
  ],
  providers: [MessageService],
  entryComponents : [NewrideComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
