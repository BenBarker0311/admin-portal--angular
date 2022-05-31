/**
 * UserResolver
 * 
 * Get currentUser and judge to redirect.
 */

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AuthApiService } from 'src/app/services/api-services/auth.api.service';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class UserResolver {

  constructor(
    public userService: AuthApiService, 
    public authService: AuthService,
    private router: Router) { }

    resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      this.userService.getMe().subscribe((res: any) => {
        this.authService.currentUser.next(res);
        return resolve(res);
      }, (err: any) => {
        this.authService.currentUser.next(undefined);
        this.router.navigate(['/login']);
        return reject(err);
      });
    })
  }
}