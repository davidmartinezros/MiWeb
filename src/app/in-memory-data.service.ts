import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable, Inject, forwardRef, SkipSelf }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Project } from './project';

export class InMemoryDataService implements InMemoryDbService {

  constructor(@Inject(forwardRef(() => Http)) @SkipSelf() public http: Http) {
      console.log("constructor");
      //Promise.resolve(_http).then(_http => this.http  = _http);
      //console.log("InMemoryDataService.http:" + this.http);

      //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  createDb() {
    console.log('createDb');
    let projects = this.http.get('./assets/data/projects.json')
          // ...and calling .json() on the response to return data
          .map((res:Response) => res.json())
          //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    return {projects};
  }

}