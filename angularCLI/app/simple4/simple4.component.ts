import {Component, OnChanges, OnInit,NgModule} from '@angular/core';
import { Date } from 'core-js';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DomSanitizer} from '@angular/platform-browser'
  @Component({
 
    selector:'app-simple4',
    templateUrl:'./app/simple4/simple4.component.html'
      
})

  export class Simple4Component implements OnInit{
      someHtml = 'some HTML <script>alert("Helo");</script>';

      myUrl='javascript:alert("Helo")';
    
     myTrustedURL;

      constructor(private sanitizer: DomSanitizer){
          this.myTrustedURL=sanitizer.bypassSecurityTrustUrl(this.myUrl);
      }

      ngOnInit(){


      }
      

  }
