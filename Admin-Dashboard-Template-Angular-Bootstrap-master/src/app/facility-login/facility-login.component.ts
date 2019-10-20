import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facility-login',
  templateUrl: './facility-login.component.html',
  styleUrls: ['./facility-login.component.scss']
})
export class FacilityLoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  verifyCred(){
    console.log("Going from facility to login");
    this.router.navigateByUrl('/login/olduser');
  }


}
