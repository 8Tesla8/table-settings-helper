import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ColumnTableComponent } from './column-table/column-table.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
@NgModule({
  declarations: [
    AppComponent,
    ColumnTableComponent,
    GenericTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
