import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { faAngleLeft, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { CalendarModel } from './calendar.model';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // Font Awesome
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  // Month Array
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
  
  
  m:any;
  days:number[]=[];
  prevDays: number[]=[];
  isSelected:boolean = false;
  selectedDay;
  date = new Date();
 
  day: CalendarModel[]=[];
  

  // Şu anki ayı ve günü ekrana yazdırmak
  currentMonth = this.months[this.date.getMonth()]
  currentDay = this.date.getDate();
  currentYear = this.date.getFullYear();
  
  // Bu ayın sonuncu gününü almak 
  lastDay = new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate();
  
  // Önceki ayın sonuncu gününü almak 
  prevlastDay = new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();

  // Haftanın hangi günü olduğunu anlamak 
  firstDayIndex= this.date.getDay();

  // 
  lastDayIndex= new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay();

  nextDays= 8 - this.lastDayIndex - 1;

  nowDay = new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate())
  
  

  constructor() { }

  ngOnInit(): void {

    
    
    for(let x=this.firstDayIndex;x>0;x--){
      this.days.push(this.prevlastDay-x+1)
      // this.prevDays.push(this.prevlastDay-x+1)
    }
    
    for(let i=1;i<=this.lastDay;i++){
      // if(i === new Date().getDate() && this.date.getMonth() === new Date().getMonth()){

      // }
      this.days.push(i)
    }

    for(let j=1;j <= this.nextDays;j++){
      this.days.push(j);
    }
    
    

  }

  prevMonth(){
    this.date.setMonth(this.date.getMonth()-1);
    this.currentMonth = this.months[this.date.getMonth()]
    if(this.currentMonth === 'December' ){
      this.currentYear = this.date.getFullYear();

    }else{
      this.currentDay = new Date(this.date.getFullYear(),this.date.getMonth()+1,1).getDate()
      
    }
  }

  nextMonth(){
    this.date.setMonth(this.date.getMonth()+1);
    this.currentMonth = this.months[this.date.getMonth()]
    if(this.currentMonth === 'January' ){
      this.currentYear = this.date.getFullYear();
      
    }else{
      
        this.currentDay = new Date(this.date.getFullYear(),this.date.getMonth()-1,1).getDate()
      
    }
  }

  

  onClicked(day){
    this.isSelected= true
    var target = day.target
    if(this.isSelected===true){
      alert("You select "+ target.innerHTML+ " " +this.currentMonth)
    }
  }
  

  


  
}
