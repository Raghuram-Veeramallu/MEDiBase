
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RecordsService implements OnInit {

    years: Object;

    constructor(
        private httpClient: HttpClient
    ){ }

    // MASTER RECORDS PLZ DO NOT USE
    // getAllRecords(id: string){
    //     var posting = {
    //         patientUID: id
    //     }
    //     const url = `http://localhost:3000/api/displayAll/`;
    //     return this.httpClient.post(url, posting);
    // }

    ngOnInit() { 
    }

    getAllYears(id: string): Observable<Object>{//patientUID: string){
        var posting = {
            patientUID: id
        }
        const url = `http://localhost:3000/api/allYears/`;
        return this.httpClient.post(url, posting);
    }


    getRecordPerYear(id: string, yr: number){
        var posting = {
            patientUID: id,
            year: yr
        }
        const url = `http://localhost:3000/api/patientRecords/`;
        return this.httpClient.post(url, posting);
    }

    // createRecord(patientUID: string, records: Records){

    // }
    
    


}
