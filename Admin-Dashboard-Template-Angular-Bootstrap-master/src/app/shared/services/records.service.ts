
import { Injectable, OnInit } from '@angular/core';
//import { Records } from '../models/medicalRecords';
//import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RecordsService implements OnInit {

    //private records: Array<Records>;
    //private yearlyRecords: Records;
    years: Object;

    constructor(
        private httpClient: HttpClient
    ){ }

    // getAllRecords(patientUID: string){
    //     return this.httpClient.post("http://localhost:3000/api/allYears/", {
    //         patientUID: "rTHDf5bLW0SjpMAndIAOxQEXxgB3"
    //     }).toPromise().then((data) =>{
    //         console.log(data as JSON);
    //     })
    // }

    // getRecordPerYear(patientUID: string, year: number){

    // }
    ngOnInit() { 
        // this.getPostsByBlogger()
        //     .subscribe(x => this.posts = x);
    }

    getAllYears(id: string): Observable<Object>{//patientUID: string){
        var posting = {
            patientUID: id
        }
        const url = `http://localhost:3000/api/allYears/`;
        return this.httpClient.post(url, posting);
        
        
        // .subscribe(data => {
        //     this.years = data;

        // })
        // console.log(this.years);
        // return this.years;

    }

        // var posting = {
        //     patientUID: patientUID
        // }

        // const url = `http://localhost:3000/api/allYears/`;
        // return this.httpClient.post(url, posting)
        //     .map(x => x.json());



        // let promise = new Promise((resolve, _reject) => {
        //     let apiURL = `http://localhost:3000/api/allYears/`;
        //     this.httpClient.post(apiURL, posting)
        //       .toPromise()
        //       .then(
        //         res => {
        //             this.years = res.map(item => {
        //                 return new SearchItem(
        //                   item.trackName,
        //                   item.artistName,
        //                   item.trackViewUrl,
        //                   item.artworkUrl30,
        //                   item.artistId
        //                 );
        //               });
        //           resolve();
        //         }
        //       );
        //   });
        //   return promise;

        // this.httpClient.post("http://localhost:3000/api/allYears/", posting).pipe(map(data => {
        //     this.years = data;
        //     //return this.years;
        // })).subscribe((res) => {
        //     console.log(res);
        // });
        // console.log(this.years);
        // return this.years;

    // createRecord(patientUID: string, records: Records){

    // }
    
    


}
