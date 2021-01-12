import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'hackslash-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
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
  ngOnInit(): void {}
}
