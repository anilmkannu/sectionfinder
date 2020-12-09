import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ListingmainService {

  //public _url: string = "/assets/data/mainListing.json";

  constructor(private http:HttpClient) { }

  // thumbListing() {
  // // return this.http.get(this._url);
  // return this.http.get(this._url);

  // }
}
