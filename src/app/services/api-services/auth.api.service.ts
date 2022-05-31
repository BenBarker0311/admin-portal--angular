/**
 * AuthApiService
 * 
 * Implements functions for auth
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import '@firebase/auth';

import { ApiHelper } from 'src/app/helpers/ApiHelper';
import { Api } from 'src/app/constants/api';
import firebaseConfig from 'src/app/constants/firebas.config';

import { 
  getAuth,
  applyActionCode, 
  createUserWithEmailAndPassword,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signOut,
 } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthApiService {
  
  constructor(private http: HttpClient) {}

  login =  (userData:any): any => {
    try {
      return this.http.post(ApiHelper.getFullApiUrl(Api.SIGN_UP), userData)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
    }
    catch(error) {
      console.log("error", error);
    }
  
  }

  getMe = ():any => {
    try {
      return this.http.get(ApiHelper.getFullApiUrl(Api.ME), ApiHelper.getAuthHeader())
      .pipe(
        map((response: any) => {
          return response;
        })
      )
    }
    catch(error) {
      console.log("error", error);
    }
  }
  
  getCurrentUser = () => {
    console.log("get currentUser");
    firebase.initializeApp(firebaseConfig);
    const auth = getAuth();
    return new Promise<any>((resolve, reject) => {
      onAuthStateChanged(auth, function(user){
        console.log("user", user);
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  signout = () => {
    firebase.initializeApp(firebaseConfig);
    const auth = getAuth();
    return new Promise((resolve, reject) => {
      if(auth.currentUser){
        signOut(auth);
        resolve("success");
      }
      else{
        reject();
      }
    });
  }

  /**
   * 
   * @param email 
   * @returns 
   */
  sendEmailForPasswordReset = async (email: any) => {
    // const password: string = await this.http.post<any>(ApiHelper.getFullApiUrl(Api.SEND_EMAIL), { email } ).toPromise();
    // console.log("password", password);

    firebase.initializeApp(firebaseConfig);
    const auth = getAuth();
    
    return new Promise<any>((resolve, reject) => {
      sendPasswordResetEmail(auth, email).then(res => {
        console.log("res", res);
        resolve(res);
      }, err => {
        console.log("error", err)
      })
    })
  }


  /**
   * 
   * @param code 
   * @param password 
   */
  resetPassword = async (code: any, password: any) => {
    firebase.initializeApp(firebaseConfig);
    const auth = getAuth();
    console.log("code", code, "password", password);
    await confirmPasswordReset(auth, code, password);
  }

  /**
   * 
   * @param userRequest 
   * @returns newUser
   */
  register(userRequest: any): Observable<any> {
    const data = {
      code: userRequest.codigo,
      email: userRequest.email,
      password: userRequest.password
    };

    return this.http.post(ApiHelper.getFullApiUrl(Api.SIGN_UP), data)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
