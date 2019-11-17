import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-records',
  templateUrl: './newrecord.component.html',
  styleUrls: ['./newrecord.component.scss']
})
export class newRecordsComponent implements OnInit {


  
  constructor() { }
  institutes = {
  date:'',
  symptoms:'',
  allergy:'',
  condition:'',
  advice:'',
  medication:'',
  course:'',
  type:'',
  cday:''
  
  
  }
  instituteLogins(instaForm: NgForm){
  console.log(instaForm.value);
  
  }
public append()
{
  this.institutes.cday="";
  this.institutes.medication="";
  this.institutes.course="";
  this.institutes.type="";
}
  ngOnInit() {
  }

}
