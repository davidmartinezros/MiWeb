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
  { path: 'dashboard', component: DashboardComponent, canActivate: [ComponentGuard],
    data: {
      title: 'Dashboard | Angular, Ionic, Java and Unity website Projects',
      author: 'David Martinez Ros',
      keywords: 'Barcelona, Job, Full, Stack, Developer, Engineer, Technology, Angular, Ionic, Java, Unity, Framework, AngularJS, Ionic, Spring Boot, Unity3D',
      description: 'Author: David Martinez Ros; Location: Barcelona; Job: Full Stack Developer, Engineer; Technology: Angular, Ionic, Java, Unity; Framework: AngularJS, Ionic, Spring Boot, Unity3D.',
    }
  },
  { path: 'projects', component: ProjectsComponent, canActivate: [ComponentGuard],
    data: {
      title: 'List of Projects | Angular, Ionic, Java and Unity website Projects',
      author: 'David Martinez Ros',
      keywords: 'Barcelona, Job, Full, Stack, Developer, Engineer, Technology, Angular, Ionic, Java, Unity, Framework, AngularJS, Ionic, Spring Boot, Unity3D',
      description: 'Author: David Martinez Ros; Location: Barcelona; Job: Full Stack Developer, Engineer; Technology: Angular, Ionic, Java, Unity; Framework: AngularJS, Ionic, Spring Boot, Unity3D.',
    } 
  },
  { path: 'following', component: FollowingComponent, canActivate: [ComponentGuard],
    data: {
      title: 'Project Following | Angular, Ionic, Java and Unity website Projects',
      author: 'David Martinez Ros',
      keywords: 'Barcelona, Job, Full, Stack, Developer, Engineer, Technology, Angular, Ionic, Java, Unity, Framework, AngularJS, Ionic, Spring Boot, Unity3D',
      description: 'Author: David Martinez Ros; Location: Barcelona; Job: Full Stack Developer, Engineer; Technology: Angular, Ionic, Java, Unity; Framework: AngularJS, Ionic, Spring Boot, Unity3D.',
    }
  },
  { path: 'detail/:id', component: ProjectDetailComponent, canActivate: [ComponentGuard],
    data: {
      title: 'Project Detail | Angular, Ionic, Java and Unity website Projects',
      author: 'David Martinez Ros',
      keywords: 'Barcelona, Job, Full, Stack, Developer, Engineer, Technology, Angular, Ionic, Java, Unity, Framework, AngularJS, Ionic, Spring Boot, Unity3D',
      description: 'Author: David Martinez Ros; Location: Barcelona; Job: Full Stack Developer, Engineer; Technology: Angular, Ionic, Java, Unity; Framework: AngularJS, Ionic, Spring Boot, Unity3D.',
    }
  },
  { path: 'type/:tipus', component: ProjectTypeComponent, canActivate: [ComponentGuard],
    data: { 
      title: 'Project Type | Angular, Ionic, Java and Unity website Projects',
      author: 'David Martinez Ros',
      keywords: 'Barcelona, Job, Full, Stack, Developer, Engineer, Technology, Angular, Ionic, Java, Unity, Framework, AngularJS, Ionic, Spring Boot, Unity3D',
      description: 'Author: David Martinez Ros; Location: Barcelona; Job: Full Stack Developer, Engineer; Technology: Angular, Ionic, Java, Unity; Framework: AngularJS, Ionic, Spring Boot, Unity3D.',
    } 
  }
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