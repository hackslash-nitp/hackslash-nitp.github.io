import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { EventsComponent } from './events/events.component';
import { HallComponent } from './hall/hall.component';
import { IndexComponent } from './index/index.component';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgForm, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import {AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule}from '@angular/fire/database';
import { NavComponent } from './index/nav/nav.component';
import { environment } from '../environments/environment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArticlesComponent,
    EventdetailsComponent,
    EventsComponent,
    HallComponent,
    IndexComponent,
    ProjectsComponent,
    NavbarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatToolbarModule,
    Ng2SearchPipeModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
