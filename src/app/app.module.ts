import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
 declarations: [AppComponent,
  ListComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
 })
 export class AppModule { }