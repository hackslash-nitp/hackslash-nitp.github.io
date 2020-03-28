import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { HallComponent } from './hall/hall.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { ArticlesComponent } from './articles/articles.component';
import { NavComponent } from './index/nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [{ path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'events', component: EventsComponent,  pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent,  pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'hall', component: HallComponent, pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent,  pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
