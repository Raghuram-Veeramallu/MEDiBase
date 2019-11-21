import { Injectable } from '@angular/core';
@Injectable()
export class SelectedYearService {

    year: number;

    constructor() {}

    getYear(){
        return this.year;
    }
    setYear(yr: number){
        this.year = yr;
    }
}
