import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  specialPage: boolean;

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
    ) {
        this.router.events.subscribe((route:any) => {
          this.currentUrl = route.url;
          this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
        });
    }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
