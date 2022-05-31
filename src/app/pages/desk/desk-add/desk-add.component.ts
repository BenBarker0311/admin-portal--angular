/**
 * Page qrCode verify in add desk
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import MenuItem from 'src/app/constants/menu.item';
import { CommonApiService } from 'src/app/services/api-services/common.api.service';
import { Api } from 'src/app/constants/api';
import { Extra } from 'src/app/constants/extra';
import { DeskService } from 'src/app/services/desk.services';
import { Route } from 'src/app/constants/routes';


@Component({
  selector: 'app-desk-add',
  templateUrl: './desk-add.component.html',
  styleUrls: ['./desk-add.component.css']
})

export class DeskAddComponent implements OnInit {

  form: FormGroup;
  menuItem: any = MenuItem;
  qrCode: string = '';
  status: string;
  extra: any = Extra;
  isFirst: boolean = true;
  isBtnDisable: boolean = false;
  qrCodeInputClass = "form-control";

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private apiSerivce: CommonApiService,
    private deskService: DeskService,
    ) { }

  ngOnInit(): void {
    this.initFormBuilder();
    this.deskService.qrCodeStatus.next('');
    this.deskService.qrCodeStatus.subscribe(status => {
      this.status = status;
    })
    this.deskService.beforeVerified = true;
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      qrCode: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
    });
  }
  
  onNext() {
    if (this.deskService.beforeVerified) {      
      this.deskService.changeQrCodeStatus(Extra.QRCODE_VERIFYING);
      this.qrCodeInputClass = "form-control";
      this.isBtnDisable = true;
      this.apiSerivce.create(Api.QROCDE_VERIFY, { qrCode: this.qrCode }, true).subscribe(response => {
        if (response && response.result == Extra.REQUEST_SUCCESS) {
          this.deskService.changeQrCodeStatus(Extra.QRCODE_SUCCESS);
          window.localStorage.setItem('qrCode', this.qrCode);
          this.deskService.beforeVerified = false;
        }
        else {
          this.deskService.changeQrCodeStatus(Extra.QRCODE_FAIL);
          this.qrCodeInputClass = "form-control status-fail"
        }

        this.isBtnDisable = false;
      }, err => {
        this.deskService.changeQrCodeStatus(Extra.QRCODE_FAIL);
        this.qrCodeInputClass = "form-control status-fail"
      });
    }
    else {
      this.router.navigate([Route.ADD_DESK_MAIN]);
    }
  }

  disableFirst(): boolean {
    this.isFirst = false;
    return true;
  }

  onCancel(): void {
    this.router.navigate([Route.DESKS]);
  }

}
