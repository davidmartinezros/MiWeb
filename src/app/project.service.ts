import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from './project';

@Injectable()
export class ProjectService {
    
    //private projectsUrl = './assets/data/projects.json';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http,
        private translate: TranslateService) { }

    getProjects(): Promise<Project[]> {
        return this.translate.get("projects")
            .toPromise()
            .catch(this.handleError);
        /*
        return this.http.get(this.projectsUrl)
            .map((res:Response) => res.json())
            .toPromise()
            .catch(this.handleError);
        */
    }

    getTypeProjects(tipus: string): Promise<Project[]> {
        return this.getProjects()
             .then(projects => projects.filter(project => project.tipus.toLowerCase() === tipus.toLowerCase()));
    }

    getProject(id: number): Promise<Project> {
        return this.getProjects()
             .then(projects => projects.find(project => project.id === id));
    }

    /*
    delete(id: number): Promise<void> {
        const url = `${this.projectsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    */

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
