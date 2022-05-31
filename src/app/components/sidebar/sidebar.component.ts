import { Component, Input, OnInit } from '@angular/core';

import MenuItem from 'src/app/constants/menu.item';
import { Route } from 'src/app/constants/routes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() selectedItem: string;
  // @Input() location: any;
  location: any;

  menuItem: any = MenuItem;
  route_location_setting: string = '/' + Route.LOCATION_SETTING;
  route_desk: string = '/' + Route.DESKS;
  route_photo: string = '/' + Route.PHOTO;
  route_available_hours: string = '/' + Route.ABAILABLE_HOURS;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log("selectedItem", this.selectedItem);
    this.location = this.authService.currentLocation;
    // this.authService.currentLocation.subscribe((location: any) => {
    //   this.location = loc;
    // })
  }

}
