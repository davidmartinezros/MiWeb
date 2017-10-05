import { Component, OnInit, Input } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() title: string;

  @Input() description: string;

  @Input() tema: string;

  @Input() cercaText: string;

  checked: boolean = true;

  projects: Project[];

  public static updateStuff: Subject<any> = new Subject();

  constructor(
    private projectService: ProjectService) {
      ProjectListComponent.updateStuff.subscribe(res => {
        // here fire functions that fetch the data from the api
        this.getProjects(); // add this!
      });
    }
  
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .then(projects => 
        { this.projects = projects }
    );
  }

  getProjectsFiltered(theme: string): Project[] {
    return this.projects.filter(item => item.tema === theme);
  }

  /*
  delete(project: Project): void {
    this.projectService
      .delete(project.id)
      .then(() => {
        this.projects = this.projects.filter(h => h !== project);
      });
  }
  */
  
}
