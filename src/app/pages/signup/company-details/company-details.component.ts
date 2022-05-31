/**
 * Page for company register
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonApiService } from 'src/app/services/api-services/common.api.service'
import { BusinessTypes } from 'src/app/interfaces/business.types';
import { Route } from 'src/app/constants/routes';
import { Api } from 'src/app/constants/api';
import { Company } from 'src/app/interfaces/company';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css', '../main.css']
})

export class CompanyDetailsComponent implements OnInit {

  form: FormGroup;
  prevRoute: String = '/' + Route.SIGNUP_LOCATION;
  businessTypes: string[] = [];
  company: Company = JSON.parse(window.localStorage.getItem('company') || '{}');
  isFirst: boolean = true;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public apiService: CommonApiService,
    public signUpService: AuthService) { }

  ngOnInit(): void {
    this.initFormBuilder();
    this.apiService.read(Api.BUSINESS_TYPE, false).subscribe(types => {
      this.businessTypes = types.map(type => type.type);
      if (types.length > 0)
        this.company.businessType = types[0].type;
    });
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      registNumber: ['', Validators.required],
    });
  }

  onContinue() {
    this.signUpService.company = this.company;
    window.localStorage.setItem('company', JSON.stringify(this.company));
    this.router.navigate([Route.SIGNUP_ACCOUNT]);
  }

  disableFirst() {
    this.isFirst = false;
    return true;
  }
}
