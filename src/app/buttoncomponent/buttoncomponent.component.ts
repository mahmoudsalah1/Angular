import { Component, OnInit, Output,EventEmitter } from '@angular/core'; 
@Component({
  selector: 'app-buttoncomponent',
  templateUrl: './buttoncomponent.component.html',
  styleUrls: ['./buttoncomponent.component.css']
})
export class ButtoncomponentComponent implements OnInit {
 @Output() valuechanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  changeval(oper){
    this.valuechanged.emit(oper)
  }

  users : any =  [
    {
    "name": "Douglas Pace",
    "country": 'UK'
    },
    {
    "name": "Mcleod Mueller",
    "country": 'USA'
    },
    {
    "name": "Day Meyers",
    "country": 'HK'
    },
    {
    "name": "Aguirre Ellis",
    "country": 'UK'
    },
    {
    "name": "Cook Tyson",
    "country": 'USA'
    }
    ];
}
