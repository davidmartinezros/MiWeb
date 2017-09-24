import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-type',
  templateUrl: './project-type.component.html',
  styleUrls: ['./project-type.component.css']
})
export class ProjectTypeComponent implements OnInit {

  @Input() projects: Project[];

  constructor(
      private projectService: ProjectService,
      private route: ActivatedRoute,
      private router: Router,
      private location: Location
  ) {}

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
          let tipus = params['tipus'];
          this.projectService.getTypeProjects(tipus)
              .then(projects => this.projects = projects);
      });
  }

  goBack(): void {
      this.location.back();
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
