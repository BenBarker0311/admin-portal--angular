/**
 * AuthGuard
 * 
 * Implements CanActivate.
 * Only logged in users can go into the routes that was setten.
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AuthApiService } from './api-services/auth.api.service';
import { Route } from 'src/app/constants/routes'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public authApiService: AuthApiService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.authApiService.getCurrentUser()
      .then(user => {
        this.router.navigate([Route.DESKS]);
        return resolve(false);
      }, err => {
        return resolve(true);
      })
    })
  }
}