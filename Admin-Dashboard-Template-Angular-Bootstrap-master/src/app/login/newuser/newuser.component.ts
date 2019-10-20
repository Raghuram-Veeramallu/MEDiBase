import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/internal/Observable';
//import { map } from 'rxjs/operators';
import * as $ from 'jquery';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {

  @ViewChild("video", {static: false})
    public video: ElementRef;

  @ViewChild("canvas", {static: false})
  public canvas: ElementRef;

  public image: any;

  private datad: string;

  constructor(
    private userService: UserService
    //private http: HttpClient
  ) { 
  }
  ngOnInit(){

  }

  public ngAfterViewInit() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();
        });
    }
  }

  public capture() {
    //console.log(uidT);
    var uid = (document.getElementById("aadhar") as HTMLInputElement).value;
    console.log(uid);
    //uid = "270724743647";
    this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 480, 360);
    this.image = this.canvas.nativeElement.toDataURL("image/png");
    this.datad = "{\r\n    \"image\":\"" + this.image + "\",\r\n    \"subject_id\":\"" + uid + "\",\r\n    \"gallery_name\":\"ge\"\r\n}";
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.kairos.com/enroll",
      "method": "POST",
      "headers": {
          "content-type": "application/json",
          "app_id": "731a6b91",
          "app_key": "dfcfe5f1dc7702d10842523844233761",
          "cache-control": "no-cache"
      },
      "processData": false,
      "data": this.datad
    }

    $.ajax(settings).done(function (response) {
      if((response.images[0].transaction.status) == "success"){
          console.log("trained successfully by name "+response.images[0].transaction.subject_id+ " in gallery name " +response.images[0].transaction.gallery_name);
      }
      else{
          console.log("failure");
      }
    });
    this.addUser(uid,"Raghuram","9205260085");

  }



  addUser(uid: string, name: string, mobile: string){
    var user = new User();
    user.uid = uid;
    user.name = name;
    user.mobile = mobile;
    this.userService.createUser(user);
  }




}
