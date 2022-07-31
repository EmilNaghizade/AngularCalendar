export class CalendarModel{
    constructor(public type: any, public day: number,public date: Date){
        this.type = type;
        this.day = day;
        this.date = date;
    }
}