import { Component, OnInit } from '@angular/core';
import { ThumbhomedetailsService } from '../services/thumbhomedetails.service';
import { BrowsecategoryService } from '../services/browsecategory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  public sectionId: any;

  constructor(

    private ThumbHomeDetails : ThumbhomedetailsService,
    private BrowsecategoryService: BrowsecategoryService,
    private route:ActivatedRoute,
  ) { 

    this.route.paramMap.subscribe(res => {​​​​​
      this.sectionId = res.get('sectionId');
  }​​​​​)
  }

  thumbHomeItem: any;
  browseElement: any;



 
  ngOnInit(): void {
    this.ThumbHomeDetails.thumbHomeDetails(this.sectionId)
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
