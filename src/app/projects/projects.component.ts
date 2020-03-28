import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  url: "https://api.github.com/users/hackslash-nitp/repos";

  Repo: Observable<any>;
  constructor(private http: HttpClient) {
    this.Repo=this.http.get<any>("https://api.github.com/users/hackslash-nitp/repos");
  }

  

  ngOnInit() {
    
  }
}
