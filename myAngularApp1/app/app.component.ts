import {Component} from '@angular/core';

  @Component({
 
    selector:'my-app',
    templateUrl:'./app/app.component.html'
      
})

  export class AppComponent{
  
    foodItems={
    'apple':{
          'name':'Apple',
          'description':'I am red.',
          'facts':{
                 'servingSize':'1 small apple',
                 'protain':'22G'
                 
                }
            }
  
  }
 likeChanged($event)
  {
   console.log('event now changed' + ' '+$event);
  }
}