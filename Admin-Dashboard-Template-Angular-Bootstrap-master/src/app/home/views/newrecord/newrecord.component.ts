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
  
  console.log(instaForm.value["cday"]);
  console.log(this.allCourses);
 
  }
public append()
{
  console.log("I made it");
  this.allCourses.push(this.institutes.course);
  this.allcdays.push(this.institutes.cday);
  this.allmedications.push(this.institutes.medication);
  this.alltypes.push(this.institutes.type);
  this.allsymptoms.push(this.institutes.symptoms);
  this.institutes.cday="";
  this.institutes.medication="";
  this.institutes.course="";
  this.institutes.type="";
  this.institutes.symptoms="";
}
  ngOnInit() {
  }

}
