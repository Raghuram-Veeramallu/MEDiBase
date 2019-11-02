import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Record } from '../models/records';

@Injectable()
export class RecordsService {

    records: AngularFireList<Record>
    record: AngularFireObject<Record>

    constructor(private db: AngularFireDatabase){    
    }

    createRecord(){

    }

    getRecords(){
        this.records = this.db.list("records");
        return this.records;
    }

}
