import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Prescription,Diagnosis,Problem,Record, Records} from "../../../shared/models/medicalRecords"
import{FacilityIDService} from "../../../shared/services/facilityId.service"
@Component({
  selector: 'app-records',
  templateUrl: './newrecord.component.html',
  styleUrls: ['./newrecord.component.scss']
})
export class newRecordsComponent implements OnInit {
  

  
  constructor(
    private FIDS: FacilityIDService
  ) { }
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
 // console.log(this.allCourses);

  console.log(this.institutes.date);
  var presc = this.addPrescription(this.institutes.medication,this.institutes.type,this.institutes.cday,this.institutes.course);
 // this.addRecord("name",this.institutes.date,this.institutes.symptoms,this.institutes.condition,this.institutes.advice,this.institutes.medication,this.institutes.type,this.institutes.cday,this.institutes.course)
  var diag = this.addDiagnosis(this.institutes.condition,this.institutes.advice);
  var probl = this.addProblem(this.institutes.symptoms);

var rec=this.addRecord(this.FIDS.getFacilityID(),this.institutes.date,[probl],[diag],[presc]);

this.addRecords(this.institutes.date.substring(0,3),[rec]);
  }
public append()
{
  console.log("I made it");
  
  this.institutes.course="";
  this.institutes.medication="";
  this.institutes.type="";
  this.institutes.cday="";
  this.institutes.symptoms="";
  
}
  ngOnInit() {
  }
addProblem(symptom:string)

{
  var prob=new Problem();
  prob.symptom=symptom;
  return prob;
}
  addPrescription(medication:string,type:string,doseage:string,duration:string)

  {
    var prescription=new Prescription();
    prescription.medication=medication;
    prescription.type=type;
    prescription.doseage=doseage;
    prescription.duration=duration;
    return prescription;
  }
  addRecord(inst:string,date:string,prob:Problem[],diag:Diagnosis[],pres:Prescription[])
  {
    var rec=new Record();
    rec.institute_ID=inst;
    rec.date_of_visit=date;
    rec.problems=prob;
    rec.diagnosis=diag;
    rec.prescription=pres;
    return rec;
  }
  addRecords(year:string,record:Record[])
  {
var recs=new Records();
recs.year=Number(year);
recs.records=record;

  }
addDiagnosis(condition:string,advice:string)
{
  var diagnosis=new Diagnosis();
  diagnosis.condition=condition;
  diagnosis.advice=advice;
  return diagnosis;

}
}
