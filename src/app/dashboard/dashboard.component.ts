import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject }    from 'rxjs/Subject';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  //changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  projects: Project[] = [];

  public static updateStuff: Subject<any> = new Subject();

  constructor(private router: Router,
              private projectService: ProjectService) {
                DashboardComponent.updateStuff.subscribe(res => {
                  // here fire functions that fetch the data from the api
                  this.getProjects(); // add this!
                });
              }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects()
      .then(projects => 
      { this.projects = projects }
    );
  }

  gotoDetail(project: Project): void {
    let link = ['/detail', project.id];
    this.router.navigate(link);
    //console.log(project.titol);
    //console.log(project.tema);
  }

  getStyleClass(project: Project): string {
    let styleClass = "module_example";
    if(project.tipus === 'Example') {
      styleClass = "module_example";
    } else if(project.tipus === 'Component') {
      styleClass = "module_component";
    } else if(project.tipus === 'Project') {
      styleClass = "module_project";
    } else if(project.tipus === 'Comparative') {
      styleClass = "module_comparative";
    }
    //console.log(styleClass);
    return styleClass;
  }
}