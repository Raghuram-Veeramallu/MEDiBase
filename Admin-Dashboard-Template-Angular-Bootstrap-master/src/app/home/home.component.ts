import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UidService } from '../shared/services/uid.services';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  specialPage: boolean;

  ///private years: JSON;

  private currentUrl = 'home';

  private specialPages: any[] = [
    '/pages/login',
    '/pages/register',
    '/pages/lock',
    '/pages/pricing',
    '/pages/single-post',
    '/pages/post-listing'
  ];
  years: any;

  constructor(
    private router: Router,
    private location: Location,
    private uidService: UidService
    //private httpClient: HttpClient
    ) {
        this.router.events.subscribe((route:any) => {
        this.currentUrl = route.url;
        this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
        //console.log(this.uidService.getUid());
      });
      
      //  "rTHDf5bLW0SjpMAndIAOxQEXxgB3"

    }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
