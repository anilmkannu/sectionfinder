import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CommonService {

  constructor(
   private  http: HttpClient

  ) {
    super();
   }


  
  categoryElementListing(): Observable<any> {
    // return this.http.get(this._url);
    let headers = {
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Authorization': `Bearer ${'2312412412421dasdassdbdfn'}`
      }
    };

    return this.http.get(`${this.getAppBaseUrl()}${'api/section/category/list/'}`,headers)
  
    }
}
