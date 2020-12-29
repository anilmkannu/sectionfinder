import { Component, OnInit } from '@angular/core';
import { ThumbhomedetailsService } from '../services/thumbhomedetails.service';
import { BrowsecategoryService } from '../services/browsecategory.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  constructor(

    private ThumbHomeDetails : ThumbhomedetailsService,
    private BrowsecategoryService: BrowsecategoryService
  ) { }

  thumbHomeItem: any;
  browseElement: any;



 
  ngOnInit(): void {
    this.ThumbHomeDetails.thumbHomeDetails()
      .subscribe(res => {
      this.thumbHomeItem = res
        console.log(this.thumbHomeItem);
      


      }

      );

      this.BrowsecategoryService.categoryElementListing()
      .subscribe(res => {
      this.browseElement = res
        console.log(this.browseElement);

      }

      );

  }

}
