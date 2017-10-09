import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Subject }    from 'rxjs/Subject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.css' ],
})

export class ProjectsComponent implements OnInit {

  cercaText: string;

  titleAngular2: string;
  descriptionAngular2: string;

  title: string;
  description: string;

  projects: Project[];
  
  @Output() update = new EventEmitter();

  public static updateStuff: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private translate: TranslateService,
    private projectService: ProjectService) {
      ProjectsComponent.updateStuff.subscribe(res => {
        // here fire functions that fetch the data from the api
        this.getProjects(); // add this!
      });
    }
  
  ngOnInit(): void {
    //this.this.getTranslation("TitleGroupAngular2");
    this.update.emit('');
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .then(projects => 
        { this.projects = projects }
    );
  }
/*
  getTranslation(key) {
    this.translate.get(key).subscribe(
      value => {
        return value;
      }
    );
  }
*/
}
