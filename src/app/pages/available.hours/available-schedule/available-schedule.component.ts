import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-schedule',
  templateUrl: './available-schedule.component.html',
  styleUrls: ['./available-schedule.component.css']
})
export class AvailableScheduleComponent implements OnInit {

  dayList: any = [ {
    name: 'Monday',
    available: true
  }, {
    name: 'Tuesday',
    available: true
  }, {
    name: 'Wednesday',
    available: true
  }, {
    name: 'Thirsday',
    available: true
  }, {
    name: 'Friday',
    available: true
  }, {
    name: 'Saturday',
    available: false
  }, {
    name: 'Sunday',
    available: false
  }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
