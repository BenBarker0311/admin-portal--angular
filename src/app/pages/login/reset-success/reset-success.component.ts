/**
 * Page for reset success dialog
 */
import { Component, OnInit } from '@angular/core';

import { Route } from 'src/app/constants/routes';

@Component({
  selector: 'app-reset-success',
  templateUrl: './reset-success.component.html',
  styleUrls: ['./reset-success.component.css', '../main.css']
})
export class ResetSuccessComponent implements OnInit {

  logInRoute: String = "/" + Route.LOGIN;
  constructor() { }

  ngOnInit(): void {
  }

}
