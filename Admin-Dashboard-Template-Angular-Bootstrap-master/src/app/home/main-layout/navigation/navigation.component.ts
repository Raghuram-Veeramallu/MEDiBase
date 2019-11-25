import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
//import{ AngularFireDatabase} from 'angularfire2/database';
//import { Observable } from 'rxjs';
import{UidService} from "../../../shared/services/uid.services";
//import { User } from 'src/app/shared/models/user';
//import { UserService } from 'src/app/shared/services/user.service';
//import { AngularFireObject } from 'angularfire2/database';
import * as jspdf from 'jspdf';
import { RecordsService } from 'src/app/shared/services/records.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { SelectedYearService } from 'src/app/shared/services/selectedYear.service';
//import { RecordRetrival } from 'src/app/shared/services/recordRetrival.service';
import { Records } from 'src/app/shared/models/medicalRecords';
import html2canvas from 'html2canvas';
//import { CardComponent } from '../card/card.component';
//import { VirtualTimeScheduler } from 'rxjs';
//import { RecordsComponent } from '../../views/records/records.component';
//import { RecordsComponent } from '../../views/records/records.component';
//import { HttpClient } from '@angular/common/http';
//import html2canvas from 'html2canvas';
//import jsPDF = require('jspdf');
//import { Ng2ImgMaxService } from 'ng2-img-max';
//declare function require(path: string):any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  records: Records[];
  //years = ['1999', '2004', '2019'];
  clicked: boolean;
  resizedImage: Blob;
  name:string;
  years:any;
  selectedYear: any;
  patientUID: string;
  patient:"";
  age:"";
  gender:""
 
  // TODO: Need to fix the click effect of years
  
  constructor(
    private router: Router,
    private recordService: RecordsService,
    private UidService:UidService,
    private db: AngularFireDatabase,
    //private recordService: RecordsService,
     private uidService: UidService,
    private selectedYrSrv: SelectedYearService
    //private recordRetrival: RecordRetrival
    //private recordsComponent: RecordsComponent,
  ) {
    this.db.database.ref('/users').orderByChild('email').equalTo(this.UidService.getUid())
    .once('value')
    .then(dataSnapshot => {
      if(dataSnapshot.val()) {
        var dataObj = dataSnapshot.val();
        this.patient=dataObj[Object.keys(dataObj)[0]].name;
        this.age=dataObj[Object.keys(dataObj)[0]].age;
        this.gender=dataObj[Object.keys(dataObj)[0]].gender;

     }});
    this.clicked = this.clicked === undefined ? false : true;
    this.name = "Akhilesh";
    this.setPatientUID(this.UidService.getUid());
    //localStorage.setItem("patientUID", "rTHDf5bLW0SjpMAndIAOxQEXxgB3");
    this.getYears();
  }

  onSelectedYear(year: any){
    this.setSelectedyear(year).then(_res =>{
      this.selectedYrSrv.setYear(Number(year));
      //localStorage.setItem("selectedYear", year);
      //console.log(localStorage.getItem("selectedYear"));
      //this.recordsComponent.getMedicalRecords(year, this.patientUID);
      this.router.navigate(['/home/records']);
    });
    //this.router.navigate(['records']);
  }
    
  getSelectedyear(){
    return this.selectedYear;
  }

  setSelectedyear(year: number){
    this.selectedYear = year;
    return new Promise((resolve, _error)=>{
      resolve();
    });
    //this.router.navigate(['../views/records']);
  }
  
  getYears(){
    this.years = this.recordService.getAllYears(this.getPatientUID());
    console.log(this.years);
  }

  getPatientUID(){
    return this.patientUID;
  }

  setPatientUID(id: string){
    this.patientUID = id;
  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }
 
  navigateToPage(page: string){
    switch(page){
        case 'dashboard':{
            this.router.navigate(['home/dashboard']);
            break;
        }
    }
  }

  pdfGen(){
    //const pdf = new jspdf('p', 'mm', 'a4');
    this.recordService.getallRecord(this.uidService.getUid() ).subscribe(result => {
      //this.recordRetrival.setRecord(result as Records[]);
      //this.records = result as [Records[]];
    this.records=result as Records[];

      //pdf.text(20,20,result as [Records[]]);
      //console.log(this.records);
    }, error => console.error(error));
   const data = <HTMLCanvasElement>document.getElementById('print');
		
   
		html2canvas(data).then((canvas) => {
			// Few necessary setting options
      const imgWidth = 20;
			//const pageHeight = 300;
			const imgHeight = canvas.height * imgWidth / canvas.width;
			//const heightLeft = imgHeight;

			const contentDataURL = canvas.toDataURL('image/png');
			const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
			const position = 0;
			pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
			
    // for(var rec of this.records)
    // {
    //   pdf.text(20,20,"Hello");
    // }
        pdf.save('Akhilesh.pdf'); // Generated PDF
		
  });

  // insertImage() {
  //   let image = require('../../../../assets/img/male_avatar.png');
  
  //   this.ng2ImgMax.resizeImage(image, 400, 300).subscribe(
  //     result => {
  //       this.resizedImage = result;
  //     },
  //     error => {
  //       console.log('Oh no!', error);
  //     }
  //   );
  // }

}}
