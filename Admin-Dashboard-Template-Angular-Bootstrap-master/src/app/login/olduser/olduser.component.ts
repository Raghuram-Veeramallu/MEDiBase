import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
//import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
//import { map } from 'rxjs/operators';
//import { Router } from '@angular/router';
import * as $ from 'jquery';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import{UidService} from "../../shared/services/uid.services";

//import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/internal/operators/map';
//import { ToastrService } from 'src/app/shared/services/toastr.service';
//import { toast } from 'angular2-materialize';
//import { ToastrService } from 'ngx-toastr';

/// <reference path ="../typings/jquery/jquery.d.ts"/>

var uID:string;

@Component({
  selector: 'app-olduser',
  templateUrl: './olduser.component.html',
  styleUrls: ['./olduser.component.scss']

})

// const headerDict = {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'Access-Control-Allow-Headers': 'Content-Type',
// }

export class OlduserComponent implements OnInit {

  @ViewChild("video", {static: false})
    public video: ElementRef;

  @ViewChild("canvas", {static: false})
  public canvas: ElementRef;

  public image: any;

  private datad: any;
  show:boolean;
  shows:boolean;
  @Input() name:string;
  uid: string;
  private userName: string;
  private router: Router;

  isDisable: boolean;

  constructor(
    private userService: UserService,
    private uidService:UidService,
   
    //private httpClient: HttpClient
    //public toastr: ToastrService,
    //private router: Router
  ) {
    this.userName = '';
    this.uidService.setUid("ap354@snu.edu.in");
    sessionStorage.clear();
    //this.uid = '-1';
  }
  ngOnInit(){
    }
  newUser(){
    this.router.navigateByUrl('../../login/newuser');
  }

  public ngAfterViewInit() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();
        });
    }
  }


  verifyFace(){
    this.sendToServer();
  }


  async sendToServer(){
    this.datad = "{\r\n    \"image\":\"" + this.image + "\",\r\n    \"gallery_name\":\"temp\"\r\n}"
    var settings = {
      "async": false,
      "crossDomain": true,
      "url": "https://api.kairos.com/recognize",
      "method": "POST",
      "headers": {
          "content-type": "application/json",
          "app_id": "744ed0da",
          "app_key": "291ab2350e2e88feca76ac97e6dfafa6",
          "cache-control": "no-cache"
      },
      "processData": false,
      "data": this.datad

    }

    this.shows=true;
//this.name="Akhilesh";
  $.ajax(settings).done(function (response) {
      var m = response;
      console.log(JSON.stringify(m).indexOf("success"));
      if(JSON.stringify(m).indexOf("success") > -1) {
        //this.uidService
          console.log(m.images[0].candidates[0].subject_id);
          return m.images[0].candidates[0].subject_id;
          //uID = m.images[0].candidates[0].subject_id;
          sessionStorage.setItem("loggedIn", uID);
          this.name = uID;
          //this.uid = m.images[0].candidates[0].subject_id;
      }
      else{
          console.log("Failure");
      }
      console.log(this.uid);
     // this.uidService.setUid(this.uid);
      //console.log(this.UidService.getUid());
      (document.getElementById('nameField') as HTMLButtonElement).innerHTML = this.uid;
      //this.toastr.success('UID is ','Success');//+m.images[0].candidates[0].subject_id,'');
      //(document.getElementById('uidField') as HTMLButtonElement).innerHTML = this.uid;
    }).then(function(_res, _err){
      //console.log(sessionStorage.getItem("loggedIn"));
      //console.log(this.uid);
      //this.afterwards();
      sessionStorage.getItem("loggedIn");

      // this.uidService.setUid(this.uid);
      // console.log(this.uidService.getUid());
    })
    //console.log(String(res));
    //this.uidService.setUid(String(res));
    //this.uidService.setUid()
  }

  public capture() {
    this.show=true;
    // this.router.navigateByUrl('/home/dashboard');
    this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 360, 240);
    this.image = this.canvas.nativeElement.toDataURL("image/png");

    // this.datad = "{\r\n    \"image\":\"" + this.image + "\",\r\n    \"gallery_name\":\"ge\"\r\n}"
    // var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://api.kairos.com/recognize",
    //   "method": "POST",
    //   "headers": {
    //       "content-type": "application/json",
    //       "app_id": "744ed0da",
    //       "app_key": "291ab2350e2e88feca76ac97e6dfafa6",
    //       "cache-control": "no-cache"
    //   },
    //   "processData": false,
    //   "data": this.datad

    // }



    // $.ajax(settings).done(function (response) {
    //   var m = response;
    //   console.log(JSON.stringify(m).indexOf("success"));
    //   if(JSON.stringify(m).indexOf("success") > -1) {
    //       console.log(m.images[0].candidates[0].subject_id);
    //       //this.document.getElementById("uidField").innerHTML = m.images[0].candidates[0].subject_id;
    //       //$("uidField").val(12);
    //       //toast('User Identfied. Name : ' +JSON.stringify(m.images[0].candidates[0].subject_id), 6000);
    //       this.uid = m.images[0].candidates[0].subject_id;
    //   }
    //   else{
    //       //Materialize.toast('User Not identified');
    //       console.log("Failure");
    //   }
    //   //this.toastr.success('UID is ','Success');//+m.images[0].candidates[0].subject_id,'');
    //   (document.getElementById('uidField') as HTMLButtonElement).innerHTML = this.uid;
    // });

    //document.getElementById("uidField").innerHTML = 0;
    //document.getElementById("uidField")
    // this.execApi().then(_res => {
    //   console.log("f2");
    //   console.log(this.uid);
    //   this.getUserDetails(this.uid);
    //   console.log("f2");
    // });
    // if (this.uid = this.sendToApi()){
    //   this.getUserDetails(this.uid);
    // }
  }

  public execApi(){
    return new Promise((sendToApi, _reject) => {
      sendToApi();
      console.log('f1');
    });
  }

  public sendToApi(): any {
    this.datad = "{\r\n    \"image\":\"" + this.image + "\",\r\n    \"gallery_name\":\"temp\"\r\n}"
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.kairos.com/recognize",
      "method": "POST",
      "headers": {
          "content-type": "application/json",
          "app_id": "744ed0da",
          "app_key": "291ab2350e2e88feca76ac97e6dfafa6",
          "cache-control": "no-cache"
      },
      "processData": false,
      "data": this.datad
    }

    $.ajax(settings).done(function (response) {
      var m = response;
      console.log(JSON.stringify(m).indexOf("success"));
      if(JSON.stringify(m).indexOf("success") > -1) {
          console.log(m.images[0].candidates[0].subject_id);
          this.document.getElementById("uidField").innerHTML = m.images[0].candidates[0].subject_id;
          this.uid = m.images[0].candidates[0].subject_id;
          return m.images[0].candidates[0].subject_id;
      }
      else{
          //Materialize.toast('User Not identified');
          console.log("Failure");
          return -1;
      }
    });
    return -1;
  }




  getUserDetails(uid: any){
    this.userName = this.userService.getUserName(uid);
    console.log(this.userName);
  }


}
