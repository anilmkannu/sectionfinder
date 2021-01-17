import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { ThumbhomepagelistingService } from "../services/thumbhomepagelisting.service";
import { CategoryService } from "../services/category.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit, OnDestroy {
  public topHeading: string =
    "Search and get inspired by finding design Components online.";

  thumItemListing: any;

  browseElement: any;

  itemTap: any;
  apiUrl: any = "http://localhost:3003/public/uploads";
  pageNo: number;
  pageSize: number;
  config: any;
  collection = { count: 50, data: [] };

  constructor(
    private router: Router,
    private ThumbhomepagelistingService: ThumbhomepagelistingService,
    private categoryService: CategoryService,
    private sanitization: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.pageNo = 1;
    this.pageSize = 8;
    this.ThumbhomepagelistingService.thumbListing(
      this.pageNo,
      this.pageSize
    ).subscribe((res) => {
      let resdata = <any>res;
      if (resdata.type == "success") {
        this.thumItemListing = resdata.data;
      }
    });

    this.categoryService.categoryElementListing().subscribe((res) => {
      let resdata = <any>res;
      if (resdata.type == "success") {
        this.browseElement = resdata.data;
      }
    });
    this.config = {
      itemsPerPage:3,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  itemBtn(sectionId) {
    console.log(["/productdetails/", sectionId]);
    this.router.navigate(["/productdetails/", sectionId]);

    //  this.itemTap = index;
    //  console.log(this.itemTap);
  }
  pageChanged(pageChangeItem){

  }

  ngOnDestroy(): void {}
}
