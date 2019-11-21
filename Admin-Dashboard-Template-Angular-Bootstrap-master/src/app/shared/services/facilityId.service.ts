import { Injectable } from '@angular/core';
@Injectable()
export class FacilityIDService {

    facilityId: string;

    constructor() {}

    getFacilityID(){
        return this.facilityId;
    }
    setFacilityID(id: string){
        this.facilityId = id;
    }
}
