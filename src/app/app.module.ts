import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import 'hammerjs';

//Ng module decorator
//decorator is a function that modified JS cleasses

@NgModule({

  //declares the view classes that belong to this module
  declarations: [
    AppComponent
  ],
  // import modules to be used
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  //provide all the services
  providers: [],

  //bootstrap the root component
  bootstrap: [AppComponent]
})

//
export class AppModule { }
