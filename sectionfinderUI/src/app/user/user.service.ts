import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CommonService } from '../common/common.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CommonService {

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
  public loginUser(reqObj){
    return this.http.post(`${this.getAppBaseUrl()}${'api/user/login'}`,reqObj,this.getConfig())
  }
}
