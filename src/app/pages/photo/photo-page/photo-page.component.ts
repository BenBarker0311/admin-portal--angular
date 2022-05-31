import { Component, OnInit } from '@angular/core';

import MenuItem from 'src/app/constants/menu.item';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {

  menuItem: any = MenuItem;
  photos: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  onUpload() {

  }
}
