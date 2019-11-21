import { Component, OnInit} from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {


  public hash: string;
  public uid: string;
  public selectedYear: number;
  //public 

  constructor(
    //private httpClient: HttpClient
    ){
      //this.getData();
    }

  getUid(){
    return this.uid;
  }
  setUid(id: string){
    this.uid = id;
  }
  getSelectedyear(){
    return this.selectedYear;
  }
  setSelectedyear(yr: number){
    this.selectedYear = yr;
  }

  ngOnInit(){}

  // getData(){
  //   //let search = new URLSearchParams();
  //   //search.set('patientUID', 'rTHDf5bLW0SjpMAndIAOxQEXxgB3');
  //   return this.httpClient.post("http://localhost:3000/api/allYears/", {
  //     patientUID: "rTHDf5bLW0SjpMAndIAOxQEXxgB3"
  //   }).toPromise().then((data) =>{
  //     console.log(data as JSON);
  //   })
  // }

}
