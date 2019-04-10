import {transition,animate,trigger,Component,state,style, keyframes,group} from '@angular/core';

import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
 selector:'test-component',
 templateUrl:'./app/testComponent/testComp.component.html',
 styles:[

 ],
 animations:[
     trigger('buttonState',[
         state('inactive',style({
             backgroundColor: "green",
             transform:'scale(1)'
         }))
     ]),
     trigger('textState',[
        state('active',style({
            backgroundColor: "blue",
            color:'white',
            transform:'scale(2)'
        })),
        transition("inactive => active", animate('500ms ease-in')),
        transition("active => inactive", animate('500ms ease-out')),
     ]),
   trigger('textState', [
       state('normal', style({
           fontSize:'1em',
      })),
      state('larger', style({
        fontSize:'1.5em',
   })),
   transition("normal => *", animate('100ms ease-in')),
 //  transition("normal => larger, larger => normal", animate('100ms ease-in')),
   ]),

   trigger('slideIn',[
       state('in',style({
           transform:'translateY(0)'
       })),
       transition(':enter', [//'void => *',[
          // style({transform:'translateY(-200%)'  }),animate(500) ]),  
          style({transform:'translateY(-200%)',width:'200px'}),
          group([
           animate("1000ms ease", style({ width :'100px'})),
           animate("3000ms 500ms ease", style({ transform :'translateY(0)'}))
          ]) ]) ,           
          
           transition(':leave',[ //'* => void',[
               animate(600,keyframes([
                  style({ transform: 'translateY(0%)',offset:0 }),
                  style({ transform: 'translateY(200%)',offset:0.5 }),
                  style({ transform: 'translateY(100%)',offset:0.8 }),
                  style({ transform: 'translateY(300%)',offset:1 }),
                
            ] ))
       ]),
   ]) ],

})

export class TestComponent
{   
 buttonState="inactive";
 textState="normal";
 
 showTestDev=false; 
 
 toggleButtonState(){
     if(this.buttonState== "inactive"){
         this.buttonState="active";
     }
     else{
         this.buttonState="inactive";
     }
 }

 toggleTextState(){
    if(this.textState== "normal"){
        this.textState="larger";
    }
    else{
        this.textState="normal";
    }
 }
 animStarted($event){
     console.log('animation started');
     console.log($event);
 }
 animStopped($event){
     console.log('animation done');
     console.log($event);
 }
}