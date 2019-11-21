import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { Records } from 'src/app/shared/models/medicalRecords';
import { RecordsService } from 'src/app/shared/services/records.service';
//import { NavigationComponent } from '../../main-layout/navigation/navigation.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  years:Observable<any[]>;

  records: any;

  //cards = [{ id: 1, title: 'First Card'}, { id: 2, title: 'Second Card'}, { id: 3, title: 'Third Card'}];
  
  constructor(
     private recordService: RecordsService,
     //private navigationComp: NavigationComponent
  ) {
    console.log("Hello");
    this.getMedicalRecords();
     console.log(localStorage.getItem("selectedYear"));
     //console.log(this.records);
     //console.log(this.navigationComp.getSelectedyear());
     //this.getMedicalRecords(this.navigationComp.getSelectedyear(), this.navigationComp.getPatientUID());
  }

  getMedicalRecords(){
    console.log(Number(localStorage.getItem("selectedYear")));
    console.log(String(localStorage.getItem("patientUID")));
    this.records = this.recordService.getRecordPerYear(String(localStorage.getItem("patientUID")), Number(localStorage.getItem("selectedYear")));
    //x.subscribe()
  }

  ngOnInit() {
    console.log(Number(localStorage.getItem("selectedYear")));
    this.getMedicalRecords();
  }

}
