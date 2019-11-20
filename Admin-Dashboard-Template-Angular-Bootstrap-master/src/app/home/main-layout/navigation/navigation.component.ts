import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
//import{ AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';

//import { User } from 'src/app/shared/models/user';
//import { UserService } from 'src/app/shared/services/user.service';
//import { AngularFireObject } from 'angularfire2/database';
import * as jspdf from 'jspdf';
import { RecordsService } from 'src/app/shared/services/records.service';
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

  //years = ['1999', '2004', '2019'];
  clicked: boolean;
  resizedImage: Blob;
  name:string;
  years:Observable<any[]>;
 
  // TODO: Need to fix the click effect of years
  
  constructor(
    private router: Router,
    private recordService: RecordsService
  ) {
    this.clicked = this.clicked === undefined ? false : true;
    this.name = "Akhilesh";
<<<<<<< HEAD
    this.setPatientUID("rTHDf5bLW0SjpMAndIAOxQEXxgB3");
    localStorage.setItem("patientUID", "rTHDf5bLW0SjpMAndIAOxQEXxgB3");
    this.getYears();
  }

  onSelectedYear(year: any){
    this.setSelectedyear(year).then(_res =>{
      localStorage.setItem("selectedYear", year);
      console.log(localStorage.getItem("selectedYear"));
      //this.recordsComponent.getMedicalRecords(year, this.patientUID);
      this.router.navigate(['/home/records']);
    });
    //this.router.navigate(['records']);
  }
    
  getSelectedyear(){
    return NavigationComponent.selectedYear;
  }

  setSelectedyear(year: number){
    NavigationComponent.selectedYear = year;
    return new Promise((resolve, _error)=>{
      resolve();
    });
    //this.router.navigate(['../views/records']);
  }
  
  getYears(){
    this.years = this.recordService.getAllYears(this.getPatientUID());
=======
    //this.years = this.getAllYears();
    //af.list('/years/'+this.name).snapshotChanges();
>>>>>>> parent of 4d65440... Merge branch 'master' of https://github.com/Raghuram-Veeramallu/DocDocx_IWSProject
    //console.log(this.years);
//this.years=['199'];
    //this.user = new User();
    //this.insertImage();
  }
  getSelectedyear(year:any){
    console.log(year)
  }
  
  getAllYears(){
    console.log(this.recordService.getAllYears("rTHDf5bLW0SjpMAndIAOxQEXxgB3"));
    //console.log(y);
    //return y;
  }

  ngOnInit() {
    // const x = this.userService.getUserById("Lp9aqaY9Xwk8zJr4FyT");
    // x.snapshotChanges().subscribe(
		// 	(user) => {
		// 		// this.spinnerService.hide();
		// 		const y = user.payload.toJSON() as User;

		// 		y['$key'] = "Lp9aqaY9Xwk8zJr4FyT";
		// 		this.user = y;
		// 	},
		// 	(_error) => {
		// 		console.log('Error while fetching Product Detail');
		// 	}
    // );
   
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
    const pdf = new jspdf('p', 'mm', 'a4');
       
        pdf.save('Test.pdf'); // Generated PDF
		
  }

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

}
