/**
 * Page for invalid signup link dialog
 */
import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/constants/routes';

@Component({
  selector: 'app-invalide-link',
  templateUrl: './invalide-link.component.html',
  styleUrls: ['./invalide-link.component.css']
})
export class InvalideLinkComponent implements OnInit {

  logInRoute: String = "/" + Route.LOGIN;
  constructor() { }

  ngOnInit(): void {
  }

}
