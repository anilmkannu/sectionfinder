import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {ListingmainService} from '../services/listingmain.service';
import {dataList} from 'src/assets/data/mainListing';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public topHeading:string = "Search and get inspired by finding design Components online.";

 
  public thumbList;

  public dataList = dataList.dataArray;

  constructor(
    private router: Router,
    private ListingmainService : ListingmainService,

  ) { }

  ngOnInit(): void {
   // console.log(this.thumbList.length);
  //  this.ListingmainService.thumbListing()
  //  .subscribe(data => data);
   this.thumbList = this.dataList;
  }

  itemBtn(){
    this.router.navigate(['/productdetails']);
  }


  ngOnDestroy(): void {
  }

}
