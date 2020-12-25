import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ThumbhomepagelistingService } from '../services/thumbhomepagelisting.service';
import { BrowsecategoryService } from '../services/browsecategory.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public topHeading: string = "Search and get inspired by finding design Components online.";


  thumItemListing: any;
  
  browseElement: any;

  constructor(
    private router: Router,
    private ThumbhomepagelistingService: ThumbhomepagelistingService,
    private BrowsecategoryService : BrowsecategoryService,

  ) { }

  ngOnInit(): void {
    this.ThumbhomepagelistingService.thumbListing()
      .subscribe(res => {
      this.thumItemListing = res
        console.log(this.thumItemListing);

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
  }


  ngOnDestroy(): void {
  }

}
