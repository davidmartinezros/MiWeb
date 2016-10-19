import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Project }           from './project';

@Injectable()
export class ProjectSearchService {
  
  constructor(private http: Http) {}
  
  search(term: string): Observable<Project[]> {
    return this.http
      .get(`app/projects/?titol=${term}`)
      .map((r: Response) => r.json().data as Project[]);
  }

  searchTheme(theme: string): Observable<Project[]> {
    return this.http
      .get(`app/projects/?tema=${theme}`)
      .map((r: Response) => r.json().data as Project[]);
  }

}