import { Component, OnInit } from '@angular/core';
import MenuItem from 'src/app/constants/menu.item';

@Component({
  selector: 'app-available-hours-page',
  templateUrl: './available-hours-page.component.html',
  styleUrls: ['./available-hours-page.component.css']
})
export class AvailableHoursPageComponent implements OnInit {
  menuItem: any = MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {

  }
}
