import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../project';
import { ProjectService } from '../project.service';

import { ProjectPipeFilterPipe } from '../project-pipe-filter.pipe';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.css' ],
  providers: [ProjectService],
})

export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(
    private router: Router,
    private projectService: ProjectService) { }
  
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  getProjectsFiltered(theme: string): Project[] {
    return this.projects.filter(item => item.tema === theme);
  }

  delete(project: Project): void {
    this.projectService
      .delete(project.id)
      .then(() => {
        this.projects = this.projects.filter(h => h !== project);
      });
  }

}