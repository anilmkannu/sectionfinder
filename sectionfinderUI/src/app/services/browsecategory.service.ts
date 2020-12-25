import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrowsecategoryService {

  constructor(
   private  http: HttpClient

  ) { }


  public url = "https://my.api.mockaroo.com/browse_element.json?key=9b05f8f0";

  
  categoryElementListing(): Observable<any> {
    // return this.http.get(this._url);
    return this.http.get(this.url);
  
    }
}
