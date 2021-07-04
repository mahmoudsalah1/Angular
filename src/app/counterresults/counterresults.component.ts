import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterresults',
  templateUrl: './counterresults.component.html',
  styleUrls: ['./counterresults.component.css']
})
export class CounterresultsComponent implements OnInit {
  @Input() outputval;
  constructor() { }
  
  ngOnInit(): void {
  }

 
}
