import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit() {
  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(7);
    return '#' + ('000000' + color).slice(-6);
  }
  team: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.team = db.list('members').valueChanges();
  }
}
