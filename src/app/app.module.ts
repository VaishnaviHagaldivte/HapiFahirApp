import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientstableComponent } from './patientstable/patientstable.component';
  
@NgModule({
  declarations: [
    AppComponent,
    PatientstableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
