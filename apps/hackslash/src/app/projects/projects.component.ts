import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'hackslash-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  Repo: Observable<any>;
  Repo$:Observable<any>;
  filter:FormControl;
  filter$:Observable<string>;

  constructor(private http: HttpClient) {
    this.Repo = this.http.get<any>(
      'https://api.github.com/users/hackslash-nitp/repos'
    );
      this.filter = new FormControl('');
      this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.Repo$ = combineLatest(this.Repo, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }

  ngOnInit(): void {}
}
