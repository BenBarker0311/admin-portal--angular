/**
 * Page for location register
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { Location } from 'src/app/interfaces/location';
import { Route } from 'src/app/constants/routes';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css', '../main.css']
})

export class LocationDetailsComponent implements OnInit {

  form: FormGroup;
  logInRoute: String = "/" + Route.LOGIN;
  btnId: number = 0;
  btnClasses: String[] = [
    "btn-desk active",
    "btn-desk",
    "btn-desk",
    "btn-desk",
    "btn-desk"
  ];
  location: Location = JSON.parse(window.localStorage.getItem('location') || '{}');
  isFirst: boolean = true;

  constructor(
    private router: Router, 
    public formBuilder: FormBuilder,
    public signUpService: AuthService) { }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  onSelect(id: number) {
    if (this.btnId >= 0) {
      this.btnClasses[this.btnId] = "btn-desk";
    }
    this.btnId = id;
    this.btnClasses[id] = "btn-desk active";
  }

  onContinue() {
    this.signUpService.location = this.location;
    window.localStorage.setItem('location', JSON.stringify(this.location));
    this.router.navigate([Route.SIGNUP_COMPANY]);
  }

  disableFirst() {
    this.isFirst = false;
    return true;
  }
}