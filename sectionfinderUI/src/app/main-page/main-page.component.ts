import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {dataList} from 'src/assets/data/mainListing';
import { ThumbhomepagelistingService } from '../services/thumbhomepagelisting.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public topHeading:string = "Search and get inspired by finding design Components online.";


  thumItemListing: any;
  //public thumbList;
  

  //public dataList = dataList.dataArray;

  constructor(
    private router: Router,
    private ThumbhomepagelistingService : ThumbhomepagelistingService,

  ) { }

  ngOnInit(): void {
   this.ThumbhomepagelistingService.thumbListing()
   .subscribe(res => { this.thumItemListing = res
    console.log(this.thumItemListing);
  
  }
    
    );

  }

  itemBtn(){
    this.router.navigate(['/productdetails']);
  }


  ngOnDestroy(): void {
  }

}
