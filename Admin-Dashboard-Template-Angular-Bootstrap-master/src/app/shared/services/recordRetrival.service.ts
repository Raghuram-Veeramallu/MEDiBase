import { Injectable } from '@angular/core';
import { Records } from '../models/medicalRecords';
@Injectable()
export class RecordRetrival {

    records: Records[];

    constructor() {}

    getRecord(){
        return this.records;
    }
    setRecord(rec: Records[]){
        this.records = rec;
    }
}
