import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbCarousel, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'angular-bootstrap-md';
import { ActivatedRoute, RouterState } from '@angular/router';



import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { HallComponent } from './hall/hall.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ArticlesComponent } from './articles/articles.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { NavComponent } from './index/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    IndexComponent,
    AboutComponent,
    HallComponent,
    ProjectsComponent,
    EventdetailsComponent,
    NavbarComponent,
    ArticlesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config),
    LayoutModule,
    HttpClientModule,
    NavbarModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    IconsModule,
    WavesModule,
    ButtonsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    FlexLayoutModule,
    NgbModule,
    DropdownModule.forRoot(),
    NavbarModule,
    IconsModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
  ],
  

  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
