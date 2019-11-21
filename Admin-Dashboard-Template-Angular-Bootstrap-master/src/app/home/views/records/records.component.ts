import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  years:Observable<any[]>;
   cards = [{ id: 1, title: 'First Card'}, { id: 2, title: 'Second Card'}, { id: 3, title: 'Third Card'}];
  constructor() {
    
  }

  ngOnInit() {
   
  }

}
