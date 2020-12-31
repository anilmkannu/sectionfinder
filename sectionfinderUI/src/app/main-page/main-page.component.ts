import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ThumbhomepagelistingService } from '../services/thumbhomepagelisting.service';
import { BrowsecategoryService } from '../services/browsecategory.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public topHeading: string = "Search and get inspired by finding design Components online.";


  thumItemListing: any;
  
  browseElement: any;

  itemTap:any;
  apiUrl: any = 'http://localhost:3003/public/uploads';
  pageNo: number;
  pageSize: number;

  constructor(
    private router: Router,
    private ThumbhomepagelistingService: ThumbhomepagelistingService,
    private BrowsecategoryService : BrowsecategoryService,
    private sanitization: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.pageNo = 1;
    this.pageSize = 4;
    this.ThumbhomepagelistingService.thumbListing(this.pageNo,this.pageSize)
      .subscribe(res => {
      this.thumItemListing = res.data;
       }

      );

      this.BrowsecategoryService.categoryElementListing()
      .subscribe(res => {
      this.browseElement = res
        console.log(this.browseElement);

      }

      );

  }

  itemBtn() {
   this.router.navigate(['/productdetails']);
  //  this.itemTap = index;
  //  console.log(this.itemTap);
  }


  ngOnDestroy(): void {
  }

}
