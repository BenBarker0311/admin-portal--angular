/**
 * DeskService
 * 
 * 
 * 
 */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Desk } from '../interfaces/desk';
 
 @Injectable()
 
export class DeskService {
   qrCodeStatus: Subject<string> = new Subject<string> (); // indicate qrCode status: zero, verifying, success, fail
   curDesk: Subject<Desk> = new Subject<Desk>(); // indicate the desk that is being add or edit 
   beforeVerified: boolean;
   modalShow: boolean = false;
   
   changeCurDesk(desk: Desk) {
      this.curDesk.next(desk);
   }
   
   changeQrCodeStatus(status: string) {
      this.qrCodeStatus.next(status);
   }
}