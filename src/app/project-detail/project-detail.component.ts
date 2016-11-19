// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: 'project-detail.component.html',
  styleUrls: ['project-detail.component.css'],
})

export class ProjectDetailComponent implements OnInit {
    
    @Input() project: Project;

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.projectService.getProject(id)
                .then(project => this.project = project);
        });
    }

    goLink(): void {
        // Es pot crida amb goLink($event)
        // i s'ha de declarar amb goLink(event): void {
        // una altra manera que no es pot indicar el target=_blank
        //location.href = this.project.link;
        window.open(this.project.link,'_blank');
        event.preventDefault();
    }

    goBack(): void {
        this.location.back();
    }

    /*save(): void {
        this.projectService.update(this.project)
            .then(() => this.goBack());
    }*/
    
}