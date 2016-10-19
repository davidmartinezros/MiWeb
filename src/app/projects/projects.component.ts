import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.css' ],
  providers: [ProjectService]
})

export class ProjectsComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  constructor(
    private router: Router,
    private projectService: ProjectService) { }

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProject.id]);
  }

  delete(project: Project): void {
    this.projectService
      .delete(project.id)
      .then(() => {
        this.projects = this.projects.filter(h => h !== project);
        if (this.selectedProject === project) { this.selectedProject = null; }
      });
  }
}