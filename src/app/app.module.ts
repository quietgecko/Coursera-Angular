import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';

//Ng module decorator
//decorator is a function that modified JS cleasses

@NgModule({

  //declares the view classes that belong to this module
  declarations: [
    AppComponent,
    MenuComponent
  ],
  // import modules to be used
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule
  ],
  //provide all the services
  providers: [],

  //bootstrap the root component
  bootstrap: [AppComponent]
})

//
export class AppModule { }
