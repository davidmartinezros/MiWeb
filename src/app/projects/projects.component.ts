import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.css' ],
  providers: [ProjectService],
  animations: [
    trigger('visibility', [
        state('shown', style({
            height: '*',
            opacity: 1
        })),
        state('hidden', style({
            height: '0px',
            opacity: 0
        })),
        transition('* => *', [animate(500, style({height: '250px', opacity: 0})), animate(500)])
    ])
  ]
})

export class ProjectsComponent implements OnInit {
  projectsAngular2: Project[];
  selectedProjectAngular2: Project;

  projectsUnity: Project[];
  selectedProjectUnity: Project;
  
  constructor(
    private router: Router,
    private projectService: ProjectService) { }

  getProjectsAngular2(): void {
    this.projectService.getProjectsForTheme('Angular2').then(projectsAngular2 => this.projectsAngular2 = projectsAngular2);
  }

  getProjectsUnity(): void {
    this.projectService.getProjectsForTheme('Unity').then(projectsUnity => this.projectsUnity = projectsUnity);
  }

  ngOnInit(): void {
    this.getProjectsAngular2();
    this.getProjectsUnity();
  }

  onSelectAngular2(project: Project): void {
    this.selectedProjectAngular2 = project;
  }

  onSelectUnity(project: Project): void {
    this.selectedProjectUnity = project;
  }

  gotoDetailAngular2(): void {
    this.router.navigate(['/detail', this.selectedProjectAngular2.id]);
  }

  gotoDetailUnity(): void {
    this.router.navigate(['/detail', this.selectedProjectUnity.id]);
  }

  deleteAngular2(project: Project): void {
    this.projectService
      .delete(project.id)
      .then(() => {
        this.projectsAngular2 = this.projectsAngular2.filter(h => h !== project);
        if (this.selectedProjectAngular2 === project) { this.selectedProjectAngular2 = null; }
      });
  }

  deleteUnity(project: Project): void {
    this.projectService
      .delete(project.id)
      .then(() => {
        this.projectsUnity = this.projectsUnity.filter(h => h !== project);
        if (this.selectedProjectUnity === project) { this.selectedProjectUnity = null; }
      });
  }
}