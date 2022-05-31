/**
 * Component for displaying desk in desk list
 */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Desk } from 'src/app/interfaces/desk';
import { Route } from 'src/app/constants/routes';

@Component({
  selector: 'app-desk-form',
  templateUrl: './desk-form.component.html',
  styleUrls: ['./desk-form.component.css']
})
export class DeskFormComponent implements OnInit {

  @Input() desk: Desk;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate([`${Route.DESKS}/${this.desk.id}`]);
  }
}
