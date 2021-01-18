import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class ThumbhomepagelistingService extends CommonService{

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
  public thumbListing(pageNo,pageSize){
    return this.http.get(`${this.getAppBaseUrl()}${'api/section/element/list/'}`+ '?pageNo=' +pageNo +'&pageSize='+pageSize)
  }

  public searchElement(pageNo,pageSize,sectionId){
    return this.http.get(`${this.getAppBaseUrl()}${'api/section/element/search/'}`+ '?pageNo=' +pageNo +'&pageSize='+pageSize+'&sectionId='+ sectionId)
  }

}



