import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThumbhomepagelistingService {

  constructor(
    private http:HttpClient

  ) { 
  }

  //public url = "https://my.api.mockaroo.com/productlisting.json?key=9b05f8f0";
  public url = "http://localhost:3003/api/section/element/list/";


  
  thumbListing(): Observable<any> {
    // return this.http.get(this._url);
    return this.http.get(this.url);
  
    }
}



