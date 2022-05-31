/**
 * Page for log in form
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthApiService } from 'src/app/services/api-services/auth.api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Route } from 'src/app/constants/routes'
import { CommonApiService } from 'src/app/services/api-services/common.api.service';
import { Api } from 'src/app/constants/api';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css', '../main.css']
})

export class LogInPageComponent implements OnInit {

  form: FormGroup;
  email: string;
  password: string;
  errorMessage: string;
  signUpLocationRoute: string = '/' + Route.SIGNUP_LOCATION;
  resetPasswordRoute: string = '/' + Route.FORGET_PASSWORD;
  isFirst: boolean = true;

  constructor(
    private router: Router,
    public authApiService: AuthApiService,
    public  apiService: CommonApiService,
    public authService: AuthService,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
    });
  }

  /**
   * handleEvent LogIn
   */
  onLogIn() {
    //request to backend
    this.apiService.create(Api.LOG_IN, { email: this.email, password: this.password}, false).subscribe(response => {
      // this.authService.changeCurrentUser(token);
      window.localStorage.setItem('token', response.token);
      this.router.navigate([Route.DESKS]);
    }, error => {
      this.errorMessage = error.error.message;
    });
  }

  onSignUp() {
    window.localStorage.removeItem('location');
    window.localStorage.removeItem('company');
    window.localStorage.removeItem('account');
    this.router.navigate([Route.SIGNUP_LOCATION]);
  }

  disableFirst() {
    this.isFirst = false;
    return true;
  }
}
