import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'hackslash-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
   ev: Observable<any>;
  ev$:Observable<any>;
  events: Observable<any>;
  events$: Observable<any>;
  filter: FormControl;
  filter$: Observable<string>;

  constructor(db: AngularFireDatabase, private http: HttpClient) {
    
    this.events=this.http.get<any>('./assets/data/events/event.json');
    this.http.get<any>(
      'https://www.eventbriteapi.com/v3/organizations/544604903183/events/?token=QCITQBPHYXMKFWP3FXXP'
      ).subscribe(res=>{
        this.ev=of(res.events);
        this.ev.subscribe();
         });;
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.events$ = combineLatest(this.events, this.filter$).pipe(
      map(([states, filterString]) =>
        states.filter(
          state =>
            state.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
        )
      )
    );
    this.ev$ = combineLatest(this.ev, this.filter$).pipe(
      map(([states, filterString]) =>
        states.filter(
          state =>
            state.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
        )
      )
    );
      
  }
   ngOnInit(): void {
  }
}
