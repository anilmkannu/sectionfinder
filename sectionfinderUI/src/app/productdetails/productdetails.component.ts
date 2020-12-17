import { Component, OnInit } from '@angular/core';
import { ThumbhomedetailsService } from '../services/thumbhomedetails.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  constructor(

    private ThumbHomeDetails : ThumbhomedetailsService
  ) { }

  thumbHomeItem: any;


 
  ngOnInit(): void {
    this.ThumbHomeDetails.thumbHomeDetails()
      .subscribe(res => {
      this.thumbHomeItem = res
        console.log(this.thumbHomeItem);
      


      }

      );

  }

}
