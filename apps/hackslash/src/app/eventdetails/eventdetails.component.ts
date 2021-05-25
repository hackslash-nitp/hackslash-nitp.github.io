import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'hackslash-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

   ev: any;
  constructor(private http: HttpClient) {
    this.http.get<any>(
      // eventbrite Api
      'https://www.eventbriteapi.com/v3/organizations/544604903183/events/?token=QCITQBPHYXMKFWP3FXXP'
    ).subscribe(res=>{
       this.ev=res.events;
        });
  }
  ngOnInit(): void {}

}
