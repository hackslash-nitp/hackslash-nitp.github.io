import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.events = db.list('events').valueChanges();
  }

  

  ngOnInit() {}
}
