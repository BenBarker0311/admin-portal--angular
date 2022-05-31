/**
 * AuthService
 * 
 * AuthService is mainly used to save auth information especially, currentUser.
 * 
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Location } from 'src/app/interfaces/location'
import { Account } from '../interfaces/account';
import { Company } from '../interfaces/company';

@Injectable()

export class AuthService {
  location: Location;
  company: Company;
  account: Account;
  currentUser: Subject<any> = new Subject<any>(); // save user that signed in
  // currentLocation: Subject<any> = new Subject<any>();
  currentLocation: any = {};

  changeCurrentUser = (user: any) => {
    this.currentUser.next(user);
  }

  // changeCurrentLocation = (location: any) => {
  //   this.currentLocation.next(location);
  // }
}