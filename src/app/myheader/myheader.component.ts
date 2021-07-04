import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.css']
})
export class MyheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }
   myname :string="Mahmoud Salah";
   mytitle :string = "Front End & Angular Platform";
   imgurl :string =  "../../assets/download.jpg"
}
