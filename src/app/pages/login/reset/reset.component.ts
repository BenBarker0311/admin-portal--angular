/**
 * Page for reset password form
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthApiService } from 'src/app/services/api-services/auth.api.service';
import { Route } from 'src/app/constants/routes';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  form: FormGroup;
  password: string;
  oobCode: string;
  isFirst: boolean = true;

  constructor(
    private router: Router,
    private activatedActivated: ActivatedRoute,
    public authApiService: AuthApiService,
    public formBuilder: FormBuilder) { }
    logInRoute: String = "/" + Route.LOGIN;
    
  ngOnInit(): void {
    this.initFormBuilder();
    this.oobCode = this.activatedActivated.snapshot.queryParams['oobCode'];
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
    });
  }

  onReset() {
    this.authApiService.resetPassword(this.oobCode, this.password);
    this.router.navigate([Route.RESET_SUCCESS]);
  }
  
  disableFirst() {
    this.isFirst = false;
    return true;
  }
}
