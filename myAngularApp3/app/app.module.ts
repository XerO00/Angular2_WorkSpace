import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FoodItemComponent} from './components/foodItem.component';
import {MatrixGreenText} from './attribute-directives/matrixGreenText.directive';
import {StripVowelPipe} from './pipes/stripVowelPipe'; 
import {FoodFormComponent} from './components/food-form.component';
import {MD_FoodFormComponent} from './components/md-foodform.component';

@NgModule({
      imports: [BrowserModule, FormsModule,ReactiveFormsModule],
      declarations:[AppComponent,FoodItemComponent,MatrixGreenText,StripVowelPipe,FoodFormComponent,
      MD_FoodFormComponent],
      bootstrap:[AppComponent]

  })

  export class AppModule{
      
  }