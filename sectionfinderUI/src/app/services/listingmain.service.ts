import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListingmainService {

  public url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  thumbListing(): Observable<any> {
  // return this.http.get(this._url);
  return this.http.get(this.url);

  }
}
