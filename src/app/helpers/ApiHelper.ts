/**
 * ApiHelper
 * 
 * Help to endpoint to get full api url.
 */
import { HttpHeaders } from "@angular/common/http"
import { environment } from "src/environments/environment"

export class ApiHelper {
  /**
   * 
   * @param url 
   * 
   * @returns {FullApiUrl: string}
   */
  static getFullApiUrl = (url: string) =>
   `${environment.API_URL}${url}`

   /**
    * 
    * @returns {HttpHeader({token})}
    */
  static getAuthHeader = () => {
     return {
       headers: new HttpHeaders({ token: window.localStorage.getItem('token') || '' })
     };
   }
}