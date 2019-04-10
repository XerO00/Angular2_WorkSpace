import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FoodItemComponent} from './components/foodItem.component';
import {MatrixGreenText} from './attribute-directives/matrixGreenText.directive';
import {StripVowelPipe} from './pipes/stripVowelPipe'; 
@NgModule({
      imports: [BrowserModule, FormsModule],
      declarations:[AppComponent,FoodItemComponent,MatrixGreenText,StripVowelPipe],
      bootstrap:[AppComponent]

  })

  export class AppModule{
      
  }