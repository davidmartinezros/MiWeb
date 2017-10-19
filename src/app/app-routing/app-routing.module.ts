import { NgModule, Injectable }             from '@angular/core';
import { RouterModule, Routes, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { ProjectsComponent }      from '../projects/projects.component';
import { FollowingComponent }   from '../following/following.component';
import { ProjectDetailComponent }  from '../project-detail/project-detail.component';
import { ProjectTypeComponent }  from '../project-type/project-type.component';

@Injectable()
export class ComponentGuard implements CanActivate {

  constructor(private router: Router) {}
 
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route);
    console.log(state)
    //this.router.navigate(["/"]);
    return true;
  }

}

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [ComponentGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ComponentGuard], data: { title: 'Escritorio' } },
  { path: 'projects', component: ProjectsComponent, canActivate: [ComponentGuard], data: { title: 'Listado de proyectos' } },
  { path: 'following', component: FollowingComponent, canActivate: [ComponentGuard], data: { title: 'Seguimiento de proyectos' } },
  { path: 'detail/:id', component: ProjectDetailComponent, canActivate: [ComponentGuard], data: { title: 'Detalle de proyecto' } },
  { path: 'type/:tipus', component: ProjectTypeComponent, canActivate: [ComponentGuard], data: { title: 'Tipo de proyecto' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    ComponentGuard
  ]
})
export class AppRoutingModule {

}