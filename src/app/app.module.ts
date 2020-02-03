import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbCarousel, NgbModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'angular-bootstrap-md';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { HallComponent } from './hall/hall.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'events', component: EventsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hall', component: HallComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NavbarComponent,
    IndexComponent,
    AboutComponent,
    HallComponent,
    ProjectsComponent,
    EventdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NavbarModule,
    MDBBootstrapModule,
    IconsModule,
    WavesModule,
    ButtonsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
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
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
