import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-records',
  templateUrl: './newrecord.component.html',
  styleUrls: ['./newrecord.component.scss']
})
export class newRecordsComponent implements OnInit {

  allCourses : string[] = [];
  allsymptoms : string[]=[];
  allcdays:string[]=[];
  allmedications:string[]=[];
  alltypes:string[]=[];
  constructor() { }
  institutes = {
  date:'',
  symptoms:'',
  
  condition:'',
  advice:'',
  medication:'',
  course:'',
  type:'',
  cday:''
  
  
  
  }
  instituteLogins(instaForm: NgForm){
  
  this.allCourses.push(instaForm.value["course"]);
  this.allcdays.push(instaForm.value["cday"]);
  this.allmedications.push(instaForm.value["medication"]);
  this.alltypes.push(instaForm.value["type"]);
  this.allsymptoms.push(instaForm.value["symptoms"]);
  console.log(this.allCourses);
  this.institutes.cday="";
  this.institutes.medication="";
  this.institutes.course="";
  this.institutes.type="";
  this.institutes.symptoms="";
  }
public append()
{
  console.log("I made it");
  
}
  ngOnInit() {
  }

}
