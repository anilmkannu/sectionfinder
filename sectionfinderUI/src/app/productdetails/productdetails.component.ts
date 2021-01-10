import { Component, OnInit } from '@angular/core';
import { ThumbhomedetailsService } from '../services/thumbhomedetails.service';
import { CategoryService } from '../services/category.service';
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
    private categoryService: CategoryService,
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
        let resdata = <any>res;

        if(resdata.type == 'success'){
          this.thumbHomeItem  = resdata.data;
          
        }
        console.log(this.thumbHomeItem);

      }

      );

      this.categoryService.categoryElementListing()
      .subscribe(res => {
        this.categoryService.categoryElementListing().subscribe((res) => {
          let resdata = <any>res;
          if (resdata.type == "success") {
            this.browseElement = resdata.data;
          }
        });

      }

      );

  }

}
