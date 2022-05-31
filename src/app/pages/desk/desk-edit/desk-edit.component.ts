/**
 * Page for edit desk
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import MenuItem from 'src/app/constants/menu.item';
import { CommonApiService } from 'src/app/services/api-services/common.api.service';
import { DeskService } from 'src/app/services/desk.services';
import { Api } from 'src/app/constants/api';
import { Extra } from 'src/app/constants/extra';

@Component({
  selector: 'app-desk-edit',
  templateUrl: './desk-edit.component.html',
  styleUrls: ['./desk-edit.component.css']
})
export class DeskEditComponent implements OnInit {

  menuItem: any = MenuItem;
  method: string = Extra.ROUTE_METHOD_UPDATE;
  currentLocation: any;

  constructor(
    private router: ActivatedRoute,
    private apiService: CommonApiService,
    private deskService: DeskService ) { }

  ngOnInit(): void {
    let params: Params;

    this.currentLocation = this.router.snapshot.data.location;
    console.log("data", this.router.snapshot.data);
     this.router.params.subscribe(param =>  {
      params = param;
      this.apiService.getOne(`${Api.DESK}/${params?.id}`, true).subscribe(desk => {
        this.deskService.changeCurDesk(desk);
      })
    });
  }
}
