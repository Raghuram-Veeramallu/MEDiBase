
import { Injectable } from '@angular/core';
//import { Records } from '../models/medicalRecords';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RecordsService {

    //private records: Array<Records>;
    //private yearlyRecords: Records;
    private years: any;

    constructor(
        private httpClient: HttpClient
    ){
    }

    // getAllRecords(patientUID: string){
    //     return this.httpClient.post("http://localhost:3000/api/allYears/", {
    //         patientUID: "rTHDf5bLW0SjpMAndIAOxQEXxgB3"
    //     }).toPromise().then((data) =>{
    //         console.log(data as JSON);
    //     })
    // }

    // getRecordPerYear(patientUID: string, year: number){

    // }

    getAllYears(patientUID: string){
        var posting = {
            patientUID: patientUID
        }
        this.httpClient.post("http://localhost:3000/api/allYears/", posting).pipe(map(data => {
            this.years = data;
            //console.log(this.years);
        })).subscribe((res) => {
            console.log(res);
            //this.years = res;
            return this.years;
            //this.years = this.years[0].all_years;
        });
        //console.log(this.years);
        return this.years;
    }

    // createRecord(patientUID: string, records: Records){

    // }
    
    


}
