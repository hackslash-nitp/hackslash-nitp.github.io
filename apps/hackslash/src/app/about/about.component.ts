import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'hackslash-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(7);
    return '#' + ('000000' + color).slice(-6);
  }
  team: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.team = db.list('members').valueChanges();
  }
  ngOnInit(): void {}
}
