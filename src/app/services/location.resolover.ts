/**
 * UserResolver
 * 
 * Get currentUser and judge to redirect.
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import { Api } from '../constants/api';
import { CommonApiService } from './api-services/common.api.service';
 
@Injectable()
export class LocationResolver {

  constructor(
    public apiService: CommonApiService, 
    public authService: AuthService) { }

    resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      this.apiService.read(Api.LOCATION_ACCOUNT, true)
      .subscribe( 
        (location: any) => {
          console.log("location-service", location);
          // this.authService.changeCurrentLocation(location);
          this.authService.currentLocation = location;
          return resolve(location);
      }, (err: any) => {
        return reject(err);
      });
    })
  }
}