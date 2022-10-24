import { DatePipe, getLocaleMonthNames } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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

  @Output() change =  new EventEmitter<any>();
  

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
  days:CalendarModel[]=[];
  isSelected:boolean = false;
  selectedDay;
  date = new Date();
  

  // Şu anki ayı ve günü ekrana yazdırmak
  currentMonth;
  currentDay:number;
  currentYear:number;
  
  // Bu ayın sonuncu gününü almak 
  lastDay:number;
  
  // Önceki ayın sonuncu gününü almak 
  prevlastDay:number;

  // Haftanın hangi günü olduğunu anlamak 
  firstDayIndex:number;

  // 
  lastDayIndex:number;

  nextDays:number;

  nowDay:Date;
  
  selectedDate: Date|null = null;
  
  ccurrentDate: number
  ccurrentMonth
  ccurrentYear
  constructor() { 
    this.ccurrentDate = this.date.getDate()
    this.ccurrentMonth = this.months[this.date.getMonth()]
    this.ccurrentYear = this.date.getFullYear()
  }

  ngOnInit(): void {
    this.renderCalendar();
  }
   
  renderCalendar() {
    this.days = []; 
    this.date.setDate(1);
    
    // Şu anki ayı ve günü ekrana yazdırmak
    this.currentMonth = this.months[this.date.getMonth()]
    this.currentDay = this.date.getDate();
    this.currentYear = this.date.getFullYear();
  
    // Bu ayın sonuncu gününü almak 
    this.lastDay = new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate();
    
    // Önceki ayın sonuncu gününü almak 
    this.prevlastDay = new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();

    // Haftanın hangi günü olduğunu anlamak 
    this.firstDayIndex= this.date.getDay()-1;

    this.lastDayIndex= new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay();

    this.nextDays= 8 - this.lastDayIndex-1;

    this.nowDay = new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate())

    //Önceki ayın günlerini ekrana yazdırmak için
    for(let x=this.firstDayIndex;x>0;x--){
      this.days.push(new CalendarModel('prev', this.prevlastDay-x+1,new Date(this.date.getFullYear(),this.date.getMonth()-1, this.prevlastDay-x+1)))
    }
    //Bugünün tarihinini belirtmek için
    for(let i=1;i<=this.lastDay;i++){
      this.days.push(new CalendarModel('today', i,new Date(this.date.getFullYear(),this.date.getMonth(),i)))
    }
    //Sonraki ayın günlerini ekrana yazdırmak için
    for(let j=1;j <= this.nextDays;j++){
        if (this.days.length % 7 > 0) {
          this.days.push(new CalendarModel('after', j, new Date(this.date.getFullYear(),this.date.getMonth()+1,j)))
      }
    }
  }
  //Önceki aya gitmek için
  prevMonth(){
    this.date.setMonth(this.date.getMonth()-1);
    this.currentMonth = this.months[this.date.getMonth()]
    if(this.currentMonth === 'December' ){
      this.currentYear = this.date.getFullYear();
    }else{
      this.currentDay = new Date(this.date.getFullYear(),this.date.getMonth()+1,1).getDate()
    }
    this.renderCalendar();
  }
  //Sonraki aya gitmek için
  nextMonth(){
    this.date.setMonth(this.date.getMonth()+1);
    this.currentMonth = this.months[this.date.getMonth()]
    if(this.currentMonth === 'January' ){
      this.currentYear = this.date.getFullYear();
    }else{
      this.currentDay = new Date(this.date.getFullYear(),this.date.getMonth()-1,1).getDate()
    }
    this.renderCalendar();
  }

  onClicked(day:Date){
    this.selectedDate = day;
    this.change.emit(day);
  }
  

  


  
}
