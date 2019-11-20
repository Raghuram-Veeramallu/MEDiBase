import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { Records } from 'src/app/shared/models/medicalRecords';
import { RecordsService } from 'src/app/shared/services/records.service';
import { NavigationComponent } from '../../main-layout/navigation/navigation.component';

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
     private navigationComp: NavigationComponent
  ) {
     //this.getMedicalRecords(1992,"6WLIX6FWj9gTCTPuf1vxFi4N3gm1");
     //console.log(this.records);
     //console.log(this.navigationComp.getSelectedyear());
     //this.getMedicalRecords(this.navigationComp.getSelectedyear(), this.navigationComp.getPatientUID());
  }

  getMedicalRecords(year:number, patientUID: string){
    console.log(year);
    this.records = this.recordService.getRecordPerYear(patientUID, year);
  }

  ngOnInit() {
    console.log(this.navigationComp.getSelectedyear());
    //this.getMedicalRecords(this.navigationComp.getSelectedyear(), this.navigationComp.getPatientUID());
  }

}
