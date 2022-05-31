/**
 * Page for real desk Information
 */
import { Component, OnInit } from '@angular/core';
import MenuItem from 'src/app/constants/menu.item';
import { Extra } from 'src/app/constants/extra';

@Component({
  selector: 'app-desk-add-main',
  templateUrl: './desk-add-main.component.html',
  styleUrls: ['./desk-add-main.component.css']
})

export class DeskAddMainComponent implements OnInit {

  menuItem: any = MenuItem;
  createMethod: string = Extra.ROUTE_METHOD_CREATE;
  constructor() { }

  ngOnInit(): void {
  }

}
