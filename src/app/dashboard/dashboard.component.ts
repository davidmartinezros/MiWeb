import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  projects: Project[] = [];

  constructor(private router: Router,
              private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects()
        .then(projects => this.projects = projects);
  }

  gotoDetail(project: Project): void {
    let link = ['/detail', project.id];
    this.router.navigate(link);
    console.log(project.titol);
    console.log(project.tema);
  }

  getColor(project: Project): string {
    let color = "#607D8B";
    if(project.tipus === 'Example') {
      color = "#607D8B";
    } else if(project.tipus === 'Component') {
      color = "yellow";
    } else if(project.tipus === 'Project') {
      color = "green";
    } else if(project.tipus === 'Comparative') {
      color = "black";
    }
    return "background-color:" + color;
  }
}