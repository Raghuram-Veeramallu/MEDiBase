import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from "../../app/shared/services/toastr.service";
//import { RecordsService } from '../shared/services/records.service';

import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './facility-login.component.html',
  styleUrls: ['./facility-login.component.scss']
})
export class FacilityLoginComponent {
  
  @ViewChild('f', { static: false }) signupForm: NgForm;
  error: boolean=false;
  constructor(
   // private toastService: ToastrService,
    private router: Router,
    private toastrService: ToastrService,
    private userService: UserService,
   
    //private records: RecordsService
  ) {
    //this.records.run();
  }
  institute = {
    facilityId: '',
    facilityPasskey: ''
  };
  

  instituteLogin(instForm: NgForm){
    console.log("Going from facility to login");
    
    
    console.log(instForm.value['facilityPasskey']);
    console.log(this.verifyuser(instForm.value['facilityId']));
    if(this.verifyuser(instForm.value['facilityId'])==instForm.value['facilityPasskey'])
   //if(instForm.value['facilityId']=="akhilesh@snu.edu.in" && instForm.value['facilityPasskey']=="akhilesh")
    {this.router.navigateByUrl('/login/olduser');}
    else
    {this.error=true;
    this.toastrService.error("Invalid Credentials","Please check your email and password");
    }
  }
  
  newUser(){
    this.router.navigateByUrl('/login/newuser');
  }
  verifyuser(email: string){
  
    
    this.userService.getPassword(email);
  }
  
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  
}