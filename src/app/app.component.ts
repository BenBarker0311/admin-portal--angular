import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { AuthApiService } from './services/api-services/auth.api.service';
import { AuthService } from './services/auth.service';
import { Route } from 'src/app/constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'frontend';
  currentUser: any;

  constructor(
    private router: Router,
    public authService: AuthService,
    public authApiService: AuthApiService) {

    this.authService.currentUser.subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  onChangePassword() {

  }
  /**
   * SingOut event handler
   */
  onSignOut() {
    this.authApiService.signout().then(res => {
      window.localStorage.removeItem('token');
      this.router.navigate([Route.LOGIN]);
    })
  }
}
