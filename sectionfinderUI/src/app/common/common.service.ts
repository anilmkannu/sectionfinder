import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * funcation name:
   * craeted by:
   * created date:
   * functionality:
   */
  public getAppBaseUrl(){
    const baseUrl = 'http://localhost:3003/';
    return baseUrl;
  }

    /**
   * funcation name:
   * craeted by:
   * created date:
   * functionality:
   */
  public getConfig(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${'2312412412421dasdassdbdfn'}`
      })
    };
    return httpOptions;
}


}