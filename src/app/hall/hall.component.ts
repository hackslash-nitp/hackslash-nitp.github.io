import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
  
  designers: Observable<any>;
  devs: Observable<any>;
  leads: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.designers = db.list('hall/designers').valueChanges();
    this.devs = db.list('hall/devs').valueChanges();
    this.leads = db.list('hall/leads').valueChanges();
  }

  ngOnInit() {
  }
 getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(7);
    return '#' + ('000000' + color).slice(-6);
  }

}

