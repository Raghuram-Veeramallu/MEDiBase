import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import{ AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';

//import { User } from 'src/app/shared/models/user';
//import { UserService } from 'src/app/shared/services/user.service';
//import { AngularFireObject } from 'angularfire2/database';
//import * as jspdf from 'jspdf';
///import html2canvas from 'html2canvas';
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
   
  
  

  
  constructor(af:AngularFireDatabase,
    private router: Router,
    
    //private userService: UserService
    //private ng2ImgMax: Ng2ImgMaxService
  ) {
    this.clicked = this.clicked === undefined ? false : true;
    this.name="Akhilesh";
    this.years=af.list('/years/'+this.name).snapshotChanges();
    console.log(this.years);
//this.years=['199'];
    //this.user = new User();
    //this.insertImage();
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

  // pdfGen(){
  //   const data = document.getElementById('receipt');

	// 	html2canvas(data).then((canvas) => {
	// 		// Few necessary setting options
	// 		const imgWidth = 208;
	// 		//const pageHeight = 295;
	// 		const imgHeight = canvas.height * imgWidth / canvas.width;
	// 		//const heightLeft = imgHeight;

	// 		const contentDataURL = canvas.toDataURL('image/png');
	// 		const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
	// 		const position = 0;
	// 		pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
	// 		pdf.save('receipt.pdf'); // Generated PDF
	// 	});
  // }

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
