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
        state('firstpos', style({
            height: '*',
            opacity: 1
        })),
        state('secondpos', style({
            height: '0px',
            opacity: 0
        })),
        transition('firstpos => secondpos', [animate(500, style({height: '0px', opacity: 0}))]),
        transition('secondpos => firstpos', [animate(500, style({height: '*', opacity: 1}))])
    ]),
    trigger('movementtrigger', [
      state('firstpos', style({transform: 'translateX(0)'})),
      state('secondpos', style({transform: 'translateX(5%)'})),
      transition('firstpos => secondpos', [
        animate('500ms ease-in')
      ]),
      transition('secondpos => firstpos', [
        animate('500ms ease-out')
      ])
    ])
  ]
})

export class ProjectsComponent implements OnInit {
  projectsAngular2: Project[];
  selectedProjectAngular2: Project;

  projectsUnity: Project[];
  selectedProjectUnity: Project;
  
  state: string ='firstpos';
  
  togglestates() {
    this.state = (this.state === 'firstpos' ? 'secondpos' : 'firstpos');
  }

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
    project.togglestates
    this.selectedProjectAngular2 = project;
  }

  onSelectUnity(project: Project): void {
    project.togglestates;
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