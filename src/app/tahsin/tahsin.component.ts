import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tahsin',
  templateUrl: './tahsin.component.html',
  styleUrls: ['./tahsin.component.css']
})
export class TahsinComponent implements OnInit {
  
  months:any[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  isSelected = true
  date = new Date();
  ccurrentDate: number
  ccurrentMonth
  ccurrentYear
  constructor() { 
    this.ccurrentDate = this.date.getDate()
    this.ccurrentMonth = this.months[this.date.getMonth()]
    this.ccurrentYear = this.date.getFullYear()
  }

  ngOnInit(): void {
  }

}
