import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,  } from "angularfire2/database";
import{UidService} from "../../../../shared/services/uid.services";
@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.scss']
})
export class Profile1Component implements OnInit {

  name = "";
  age = "";
  gender = "";
  phone = "";
blood="";
height="";
weight="";
location="";
  imagesBasic = [
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      description: 'Image 1'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      description: 'Image 2'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      description: 'Image 3'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
      description: 'Image 4'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      description: 'Image 5'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
      description: 'Image 6'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
      description: 'Image 7'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
      description: 'Image 8'
    },
    {
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
      thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg',
      description: 'Image 9'
    }
];
  constructor(private db: AngularFireDatabase,private UidService:UidService) { 
    
    this.db.database.ref('/users').orderByChild('email').equalTo(this.UidService.getUid())
    .once('value')
  .then(dataSnapshot => {
    if(dataSnapshot.val()) {
       var dataObj = dataSnapshot.val();
       this.name = dataObj[Object.keys(dataObj)[0]].name;
       this.blood=dataObj[Object.keys(dataObj)[0]].blood;
       this.age=dataObj[Object.keys(dataObj)[0]].age;
       this.gender=dataObj[Object.keys(dataObj)[0]].gender;
       this.height=dataObj[Object.keys(dataObj)[0]].height;
       this.location=dataObj[Object.keys(dataObj)[0]].location;
       this.phone=dataObj[Object.keys(dataObj)[0]].mobile;
       this.weight=dataObj[Object.keys(dataObj)[0]].weight;
       
  }});}

  ngOnInit() {
  }

}
