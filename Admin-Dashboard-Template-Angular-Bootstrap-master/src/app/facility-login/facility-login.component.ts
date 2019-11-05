import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { RecordsService } from '../shared/services/records.service';



@Component({
  selector: 'app-root',
  templateUrl: './facility-login.component.html',
  styleUrls: ['./facility-login.component.scss']
})
export class FacilityLoginComponent {
  
  @ViewChild('f', { static: false }) signupForm: NgForm;
  constructor(
    private router: Router,
    //private records: RecordsService
  ) {
    //this.records.run();
  }
  institute = {
    facilityId: '',
    facilityPasskey: ''
  };
  submitted = false;

  instituteLogin(instForm: NgForm){
    console.log("Going from facility to login");
    //DONE:   instForm.value['facilityID']
    // instForm.value['facilityPasskry']
    console.log(instForm.value['facilityId'].toString());
    this.router.navigateByUrl('/login/olduser');
  }
  newUser(){
    this.router.navigateByUrl('/login/newuser');
  }
  
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  
}