/**
 * Page for forget password
 */

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/api-services/auth.api.service';

import { Route } from 'src/app/constants/routes';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css', '../main.css']
})
export class ForgetPasswordComponent implements OnInit {

  email: string;
  form: FormGroup;
  isFirst: boolean = true;
  logInRoute: String = "/" + Route.LOGIN;
  
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public authApiService: AuthApiService) { }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    });
  }

  onSend = async () => {
    await this.authApiService.sendEmailForPasswordReset(this.email);
    this.router.navigate([Route.VERIFY_PASSWORD])
  }

  disableFirst() {
    this.isFirst = false;
    return true;
  }
}
