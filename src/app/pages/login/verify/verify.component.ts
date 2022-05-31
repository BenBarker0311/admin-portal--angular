/**
 * Page for checking inbox dialog
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Route } from 'src/app/constants/routes'

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css', '../main.css']
})
export class VerifyComponent implements OnInit {
  logInRoute: string = '/' + Route.LOGIN;
  
  constructor(private activatedActivated: ActivatedRoute) { 
    const code: string = this.activatedActivated.snapshot.queryParams['oobCode'];
    console.log("code", code)
  }

  ngOnInit(): void {
  }

  onMailBox() {
    window.open(Route.MAIL_BOX);
  }
}
 