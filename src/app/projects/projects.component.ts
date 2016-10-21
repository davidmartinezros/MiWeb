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
        state('in', style({
            height: '*',
            opacity: 1
        })),
        state('out', style({
            height: '0px',
            opacity: 0
        })),
        transition('void => *', [animate(500, style({height: '0px', opacity: 0}))]),
        transition('* => void', [animate(500, style({height: '*', opacity: 1}))])
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0) scale(1)'})),
      state('out',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('out => in', animate('100ms ease-in')),
      transition('in => out', animate('100ms ease-out')),
      transition('void => out', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('out => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => in', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('in => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ]
})

export class ProjectsComponent implements OnInit {
  projectsAngular2: Project[];
  selectedProjectAngular2: Project;

  projectsUnity: Project[];
  selectedProjectUnity: Project;
  
  state: string ='out';
  
  toggleState() {
    this.state = (this.state === 'in') ? 'out': 'in';
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