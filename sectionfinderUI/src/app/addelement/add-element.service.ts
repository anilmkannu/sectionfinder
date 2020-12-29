import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class AddElementService extends CommonService {

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  /**
   * funcation name:
   * craeted by:
   * created date:
   * functionality:
   */
  public addElement(reqObj){
    let headers = {
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Authorization': `Bearer ${'2312412412421dasdassdbdfn'}`
      }
    };

    return this.http.post(`${this.getAppBaseUrl()}${'api/section/element/create/'}`,reqObj,headers)
  }
}