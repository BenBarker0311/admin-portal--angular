/**
 * Page for Confirm sing up
 */
import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/constants/routes';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css', '../main.css']
})
export class ConfirmComponent implements OnInit {

  logInRoute: String = "/" + Route.LOGIN;
  constructor() { }

  ngOnInit(): void {
  }
}