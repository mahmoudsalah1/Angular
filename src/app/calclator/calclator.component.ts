import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calclator',
  templateUrl: './calclator.component.html',
  styleUrls: ['./calclator.component.css']
})
export class CalclatorComponent implements OnInit {
  num : string='';
  constructor() { }

  ngOnInit(): void {
   
  }

  
EnterNumber(val:any){
      this.num +=val
}
EnterOperator(opera:any){
  this.num += opera
}
EnterEqual(){
  this.num = eval(this.num)
}

 EnterClear(){
  this.num  =""
}
}
