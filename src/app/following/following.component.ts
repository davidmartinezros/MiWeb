import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-following',
  templateUrl: 'following.component.html',
  styleUrls: ['following.component.css'],
})

export class FollowingComponent implements OnInit {

  projects: Project[] = [];

  constructor(private router: Router,
              private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    setInterval(() => {
      this.projectService.getProjects()
        .then(projects => 
          { this.projects = projects }
        );
    }, 1000);
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