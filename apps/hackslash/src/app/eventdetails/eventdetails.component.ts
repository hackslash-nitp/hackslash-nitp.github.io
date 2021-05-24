import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'hackslash-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

   ev: Observable<any>;
  ev$:Observable<any>;
  filter:FormControl;
  filter$:Observable<string>;

  constructor(private http: HttpClient) {
    this.ev = this.http.get<any>(
      'https://www.eventbrite.com/o/hackslash-club-33466187871'//api of event brite
    );
      this.filter = new FormControl('');
      this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.ev$ = combineLatest(this.ev, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }

  ngOnInit(): void {}

}
