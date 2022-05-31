/**
 * Page for account register
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiService } from 'src/app/services/api-services/common.api.service';
import { Route } from 'src/app/constants/routes'
import { Api } from 'src/app/constants/api'
import { Account } from 'src/app/interfaces/account';
import { AuthService } from 'src/app/services/auth.service';
import { Company } from 'src/app/interfaces/company';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css', '../main.css']
})

export class AccountDetailsComponent implements OnInit {
  form: FormGroup;
  prevUrl: String = '/' + Route.SIGNUP_COMPANY;
  account: Account = JSON.parse(window.localStorage.getItem('account') || '{}');

  location: Location;
  company: Company;
  isFirst: boolean = true;
  errorMessage: string;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder, 
    private apiService: CommonApiService,
    public signUpService: AuthService) { }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onContinue() {
    this.location = JSON.parse(window.localStorage.getItem('location') || '{}');
    this.company = JSON.parse(window.localStorage.getItem('company') || '{}');
    this.apiService.create(Api.SIGN_UP, {
      location: this.signUpService.location || this.location,
      company: this.signUpService.company || this.company,
      account: this.account
    }, false).subscribe(user => {
      window.localStorage.removeItem('location');
      window.localStorage.removeItem('company');
      console.log("user", user);
      this.router.navigate([Route.SIGNUP_CONFIRM]);
    }, err => {
      this.errorMessage = err.error.message;
    });
  }

  disableFirst() {
    this.isFirst = false;
    return true;
  }
}