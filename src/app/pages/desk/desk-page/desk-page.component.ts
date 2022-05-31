/**
 * Page for desk list
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Desk } from 'src/app/interfaces/desk';
import { CommonApiService } from 'src/app/services/api-services/common.api.service';
import { Api } from 'src/app/constants/api';
import { Route } from 'src/app/constants/routes';
import MenuItem from 'src/app/constants/menu.item';
import { DeskService } from 'src/app/services/desk.services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-desk-page',
  templateUrl: './desk-page.component.html',
  styleUrls: ['./desk-page.component.css']
})

export class DeskPageComponent implements OnInit {
  desks: Desk[] = [];
  menuItem: any = MenuItem;
  notShowModal: boolean = !!window.localStorage.getItem('notShowModal');
  constructor(
    private router: Router,
    private deskService: DeskService,
    private userService: AuthService,
    private apiService: CommonApiService) { }
  
  ngOnInit(): void {
    console.log("desk init");
    this.apiService.read(`${Api.DESK}?location=${this.userService.currentLocation.id}`, true).subscribe(desks => this.desks = desks.map((desk, index) => {
      return {
        ...desk,
        index: index + 1
      }
    }));

    if (!this.notShowModal && this.deskService.modalShow) {
      let element:HTMLElement = document.getElementById('btnModal') as HTMLElement;
      element.click();
      this.deskService.modalShow = false;
    }
  }

  getStats(event: any) {
    console.log("event", event.target.checked);
    this.notShowModal = !!event.target.checked;
  }
  onAdd() {
    this.router.navigate([Route.ADD_DESK]);
  }

  onClose() {
    if (this.notShowModal)
      window.localStorage.setItem('notShowModal', "true");
    else
      window.localStorage.removeItem('notShowModal');
  }
}
