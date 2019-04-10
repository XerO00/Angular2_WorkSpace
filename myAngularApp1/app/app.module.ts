import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FoodItemComponent} from './components/foodItem.component';

  @NgModule({
      imports: [BrowserModule, FormsModule],
      declarations:[AppComponent,FoodItemComponent],
      bootstrap:[AppComponent]

  })

  export class AppModule{
      
  }