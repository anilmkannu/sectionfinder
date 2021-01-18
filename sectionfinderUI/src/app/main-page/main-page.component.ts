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
  categoryName: any;
  browseElement: any;

  itemTap: any;
  apiUrl: any = "http://localhost:3003/public/uploads";
  pageNo: number;
  pageSize: number;
  config: any;
  totalCount: number;
  categoryData: any;

  constructor(
    private router: Router,
    private ThumbhomepagelistingService: ThumbhomepagelistingService,
    private categoryService: CategoryService,
    private sanitization: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.pageNo = 1;
    this.pageSize = 3;
    this.getDashBoardData();
    this.getCategory();
    this.config = {
      itemsPerPage: this.pageSize,
      currentPage: this.pageNo,
      totalItems: this.totalCount,
    };
  }
  /******************************************
   * functionName: get Category Element
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:10/01/2021
   ********************************************/
  getDashBoardData() {
    this.ThumbhomepagelistingService.thumbListing(
      this.pageNo,
      this.pageSize
    ).subscribe((res) => {
      let resdata = <any>res;
      if (resdata.type == "success") {
        this.thumItemListing = resdata.data;
        this.totalCount = resdata.totalCount;
        this.config = {
          itemsPerPage: this.pageSize,
          currentPage: this.pageNo,
          totalItems: this.totalCount,
        };
      }
    });
  }
  /******************************************
   * functionName: get Category Element
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:10/01/2021
   ********************************************/
  getCategory() {
    this.categoryService.categoryElementListing().subscribe((res) => {
      let resdata = <any>res;
      if (resdata.type == "success") {
        this.categoryData = resdata.data;
      }
    });
  }

  /******************************************
   * functionName: get Category Element
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:10/01/2021
   ********************************************/
  itemBtn(sectionId) {
    console.log(["/productdetails/", sectionId]);
    this.router.navigate(["/productdetails/", sectionId]);

    //  this.itemTap = index;
    //  console.log(this.itemTap);
  }

  /******************************************
   * functionName: get Category Element
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:10/01/2021
   ********************************************/
  changeCategory(e) {
    console.log(this.categoryName);
    this.searchElementById(this.categoryName._id);
  }
  /******************************************
   * functionName: get Category Element
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:10/01/2021
   ********************************************/
  pageChanged(pageChangeItem) {
    this.pageNo = pageChangeItem;
    this.getDashBoardData();
  }

  /******************************************
   * functionName: get Category Element
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:10/01/2021
   ********************************************/
  searchElementById(sectionId) {
    this.ThumbhomepagelistingService.searchElement(
      this.pageNo,
      this.pageSize,
      sectionId
    ).subscribe((res) => {
      let resdata = <any>res;
      if (resdata.type == "success") {
        this.thumItemListing = resdata.data;
        this.totalCount = resdata.totalCount;
        this.config = {
          itemsPerPage: this.pageSize,
          currentPage: this.pageNo,
          totalItems: this.totalCount,
        };
      }
    });
  }
  /******************************************
   * functionName: get Category Element
   * input: {}
   * output: JSON
   * owner: Sushil Yadav
   * date:10/01/2021
   ********************************************/
  ngOnDestroy(): void {}
}
