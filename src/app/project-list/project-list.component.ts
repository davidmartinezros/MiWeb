import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() title: string;

  @Input() tema: string;

  @Input() cercaText: string;

  checked: boolean = true;

  projects: Project[];

  constructor(
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
