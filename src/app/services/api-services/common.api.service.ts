/**
 * CommonApiSerivce
 * 
 * Implements call interfaces for CRUD apis
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiHelper } from 'src/app/helpers/ApiHelper';

@Injectable({
  providedIn: 'root'
})

export class CommonApiService {
  constructor(
    private http: HttpClient
  ) {}

  /**
   * For post method
   * @param url 
   * @param request 
   * @returns 
   */
  create(url:string, request: any, auth: boolean): Observable<any> {
    const func = auth ?
    this.http.post<any>(ApiHelper.getFullApiUrl(url), request, ApiHelper.getAuthHeader()) :
    this.http.post<any>(ApiHelper.getFullApiUrl(url), request);

    return func
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  /**
   * For get method
   * @param url 
   * @returns 
   */
  read(url:string, auth: boolean): Observable<any[]> {
    const func = auth ? 
    this.http.get<any>(ApiHelper.getFullApiUrl(url), ApiHelper.getAuthHeader()): 
    this.http.get<any>(ApiHelper.getFullApiUrl(url));
    return func
    .pipe(
      map((response: [any]) => {
        return response;
      })
    );
  }

  /**
   * For update method
   * @param url 
   * @param request 
   * @returns 
   */
  update(url:string, request: any, auth: boolean): Observable<any> {
    const func = auth ?
    this.http.put<any>(ApiHelper.getFullApiUrl(url), request, ApiHelper.getAuthHeader()):
    this.http.put<any>(ApiHelper.getFullApiUrl(url), request);

    return func
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  /**
   * For delete method
   * @param url 
   * @returns 
   */
  delete(url:string, auth: boolean): Observable<any> {
    const func = auth ?
    this.http.delete<any>(ApiHelper.getFullApiUrl(url), ApiHelper.getAuthHeader()):
    this.http.delete<any>(ApiHelper.getFullApiUrl(url));

    return func
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  /**
   * For get one document
   * @param url 
   * @returns 
   */
  getOne(url: string, auth: boolean): Observable<any> {
    const func = auth ? this.http.get<any>(ApiHelper.getFullApiUrl(url), ApiHelper.getAuthHeader()):
    this.http.get<any>(ApiHelper.getFullApiUrl(url));
    return func
    .pipe(
      map((response: any) => {
        return response;
      })
    )
  }
}