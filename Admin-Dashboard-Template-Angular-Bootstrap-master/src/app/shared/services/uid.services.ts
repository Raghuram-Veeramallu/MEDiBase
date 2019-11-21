import { Injectable } from '@angular/core';
@Injectable()
export class UidService {

    uid: string;

    constructor() {}

    getUid(){
        return this.uid;
    }
    setUid(id: string){
        this.uid = id;
    }
}
