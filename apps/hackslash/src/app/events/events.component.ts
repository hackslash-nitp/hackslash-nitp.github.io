import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'hackslash-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.events = db.list('events').valueChanges();
  }

  ngOnInit(): void {}
}
