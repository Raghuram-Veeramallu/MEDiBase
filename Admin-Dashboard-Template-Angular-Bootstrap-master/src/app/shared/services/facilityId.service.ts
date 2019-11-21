import { Injectable } from '@angular/core';
@Injectable()
export class FacilityIDService {

    facilityId: string;

    constructor() {}

    getFacilityID(){
        return this.facilityId;
    }
    setYear(id: string){
        this.facilityId = id;
    }
}
