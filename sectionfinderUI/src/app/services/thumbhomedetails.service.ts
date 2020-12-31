import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThumbhomedetailsService {

  constructor(
   private http: HttpClient
    ) { 

    }

  //public url = "https://my.api.mockaroo.com/productdetails.json?key=9b05f8f0";


  thumbHomeDetails(sectionId): Observable<any> {

  let url = "http://localhost:3003/api/section/element/list/"  + sectionId ;

 return this.http.get(url);
  }

  

}
