import { Component, ViewChild } from '@angular/core';
import { CounterresultsComponent } from './counterresults/counterresults.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 

})

export class AppComponent {
  res : number =0;


  ngAfterViewInit(){
  }

  resultval(ev){
      
   if(ev == '+'){
      this.res++
    }else if(this.res==0  && ev == '-' ){

    }else{
      this.res--
    }


  }
}
