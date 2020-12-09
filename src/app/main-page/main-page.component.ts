import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public topHeading:string = "Search and get inspired by finding design Components online.";

  public thumbList= [
    {"id":"1", "thumb":"https://www.theluxurysignature.com/wp-content/uploads/2015/03/Rambutan-Fruit.jpg", "caption":"FRUITS by basket"},
    {"id":"2", "thumb":"https://thumbs-prod.si-cdn.com/aH6F4gbRLOH0WrjHthkO_mnqseQ=/fit-in/1600x0/https://public-media.si-cdn.com/filer/a9/ff/a9ff31d0-aecd-464e-80c7-873e4651cd2b/mufasa.jpeg", "caption":"LION by corbett"},
    {"id":"3", "thumb":"https://i.guim.co.uk/img/media/d24c8ce8e2e2fdd99e263aa3991abbb71e7595bf/128_0_3840_2304/master/3840.jpg?width=1200&quality=85&auto=format&fit=max&s=4ff878d533518fe2840b09575173c768", "caption":"PEPPA by peppapig"},
    {"id":"4", "thumb":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/927b3542-9619-419b-b22c-6d9544df9fbe/db0liet-4c1a91e2-2f15-45f9-8247-9deb98d77a0e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTI3YjM1NDItOTYxOS00MTliLWIyMmMtNmQ5NTQ0ZGY5ZmJlXC9kYjBsaWV0LTRjMWE5MWUyLTJmMTUtNDVmOS04MjQ3LTlkZWI5OGQ3N2EwZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lCZiOjEZric_ixDuj7qKntTnCScq6Omr6Hr557Xhm_w", "caption":"PEPPA by peppapig"},
    {"id":"5", "thumb":"https://www.crn.com/resources/025e-0fc4b05ecaee-751be8857411-1000/accenture-sign.jpg", "caption":"LOGO by accenture"},
    {"id":"6", "thumb":"https://static.toiimg.com/photo/47529300.cms", "caption":"BLOG by toi"},
    {"id":"7", "thumb":"https://cdn.vox-cdn.com/thumbor/XHVs8fEWrfAzkzYLAI2VL8-HKxM=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65012636/mdoying_180117_2249_twitter_0241_1stills.0.jpg", "caption":"LOGO by twitter"},
    {"id":"8", "thumb":"https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png", "caption":"FOOTER by amazon"},


  ]

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
    console.log(this.thumbList.length);
  }

  itemBtn(){
    alert("Website details");
    this.router.navigate(['/productdetails']);
  }


  ngOnDestroy(): void {
  }

}
