import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tahsin',
  templateUrl: './tahsin.component.html',
  styleUrls: ['./tahsin.component.css']
})
export class TahsinComponent implements OnInit {

  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
