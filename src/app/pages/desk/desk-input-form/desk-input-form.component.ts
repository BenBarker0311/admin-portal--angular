/**
 * Component for input form of desk information.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Desk } from 'src/app/interfaces/desk';
import { CommonApiService } from 'src/app/services/api-services/common.api.service';
import { DeskService } from 'src/app/services/desk.services';
import { Api } from 'src/app/constants/api';
import { Route } from 'src/app/constants/routes';
import { Extra } from 'src/app/constants/extra';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-desk-input-form',
  templateUrl: './desk-input-form.component.html',
  styleUrls: ['./desk-input-form.component.css']
})
export class DeskInputFormComponent implements OnInit {
  
  @Input() routeMethod: string;

  desk: Desk;
  form: FormGroup;
  qrCode: string = "";
  isFirst: boolean = true;
  index: number = 1;
  isEdit: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private userService: AuthService,
    private deskService: DeskService,
    private apiService: CommonApiService
    ) { }

  ngOnInit(): void {
    if (this.routeMethod == Extra.ROUTE_METHOD_CREATE) {
      this.qrCode = window.localStorage.getItem('qrCode') || '';
      this.isEdit = false;
    }
    else {
      this.isEdit = true;
      this.deskService.curDesk.subscribe(desk => {
        this.desk = desk;
        this.qrCode = desk.qrCode;
        this.form.get('price')?.setValue(desk.price);
        this.form.get('description')?.setValue(desk.description);
        this.form.get('internalRef')?.setValue(desk.internalRef);
        this.form.get('active')?.setValue(desk.active);
      });
    }
    
    this.initFormBuilder();
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      active: [],
      price: ['',
        Validators.required
      ],
      description: ['',
        Validators.required
      ],
      internalRef: ['',
        Validators.required
      ],
    });
  }

  public disableFirst(): boolean {
    this.isFirst = false;
    return true;
  }

  public onSave() {

    if (this.routeMethod == Extra.ROUTE_METHOD_CREATE) {
      this.apiService.create(Api.DESK, {
        qrCode: this.qrCode,
        price: this.form.get('price')?.value,
        description: this.form.get('description')?.value,
        internalRef: this.form.get('internalRef')?.value,
        active: this.form.get('active')?.value,
        location: this.userService.currentLocation.id
      }, true).subscribe(response => {
        if (response) {
          window.localStorage.removeItem('qrCode');
          this.deskService.modalShow = true;
          this.router.navigate([Route.DESKS]);
        }
      });
    }
    else if (this.routeMethod == Extra.ROUTE_METHOD_UPDATE) {
      this.apiService.update(Api.DESK, {
        id: this.desk.id,
        qrCode: this.qrCode || this.desk.qrCode,
        price: this.form.get('price')?.value || this.desk.price,
        active: !!(this.form.get('active')?.value || this.desk.active),
        description: this.form.get('description')?.value || this.desk.description,
        internalRef: this.form.get('internalRef')?.value || this.desk.internalRef, 
        location: this.userService.currentLocation.id
      }, true).subscribe(response => {
        if (response) {
          this.router.navigate([Route.DESKS]);
        }
      });
    }
  }

  public onCancel() {
    this.router.navigate([Route.DESKS]);
  }

  public onDelete() {
    this.apiService.delete(`${Api.DESK}/${this.desk.id}`, true).subscribe(response => {
      if (response && response.result == Extra.REQUEST_SUCCESS)
        this.router.navigate([Route.DESKS]);
      else
        this.form.reset();
    })
  }
}
