import {Component,Input,EventEmitter,Output} from '@angular/core';

  @Component({
 
    selector:'food-item',
    templateUrl:'./app/components/foodItem.component.html',
    styleUrls:['app/components/foodItem.component.css']
      
})

  export class FoodItemComponent{
   // interpolation example; they would not work with new keyword 
    //  name="Prasanna";
     @Input()foodItem;
     @Output()likeChanged = new EventEmitter();

     likedFeatured ="liked featured";
     isLike = false;

   //custom logic using event bindings 
      onLikeButtonPressed($event)
      {
       var title = $event.target.textContent;
        if(title=="Like")
          {
            $event.target.textContent="Unlike";
            this.isLike= true;
          }
          else
          {
            $event.target.textContent="Like";
            this.isLike= false;
          }
          this.likeChanged.emit(this.isLike);
      }
  } 
