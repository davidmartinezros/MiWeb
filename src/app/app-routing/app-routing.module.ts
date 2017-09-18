import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ɵROUTER_PROVIDERS } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { ProjectsComponent }      from '../projects/projects.component';
import { FollowingComponent }   from '../following/following.component';
import { ProjectDetailComponent }  from '../project-detail/project-detail.component';
import { ProjectTypeComponent }  from '../project-type/project-type.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'following', component: FollowingComponent },
  { path: 'detail/:id', component: ProjectDetailComponent },
  { path: 'type/:tipus', component: ProjectTypeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    ɵROUTER_PROVIDERS,
    {provide: APP_BASE_HREF, useValue : '/' },
    {provide: LocationStrategy, useClass: PathLocationStrategy  }
  ]
})

export class AppRoutingModule {

}