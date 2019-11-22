
import { Injectable } from '@angular/core';
//import { Records } from '../models/medicalRecords';
//import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RecordsService {

    //private records: Array<Records>;
    //private yearlyRecords: Records;
    //private years: Object;

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
    getallRecord(id:string){
        var posting = {
            patientUID: id
        }
        const url = `http://10.6.15.177:3000/api/forPdfGenerator/`;
        return this.httpClient.post(url, posting);
    }

    getRecordPerYear(id: string, yr: number){
        var posting = {
            patientUID: id,
            year: yr
        }
        const url = `http://10.6.15.177:3000/api/patientRecords/`;
        return this.httpClient.post(url, posting);
    }

    getAllYears(id: string){
        var posting = {
            patientUID: id
        }
        const url = `http://10.6.15.177:3000/api/allYears/`;
        return this.httpClient.post(url, posting);
    }

    // createRecord(patientUID: string, records: Records){

    // }




}
