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

export const routes: Routes = [{ path: '', component: IndexComponent },
{ path: 'events', component: EventsComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'about', component: AboutComponent },
  { path: 'hall', component: HallComponent },
  { path: 'articles', component: ArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
