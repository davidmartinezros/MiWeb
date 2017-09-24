import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FollowingComponent } from './following/following.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './project.service';
import { PipesModule } from './pipes/pipes.module';

import './rxjs-extensions';
import { ProjectPipeFilterPipe } from './project-pipe-filter.pipe';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectTypeComponent } from './project-type/project-type.component';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore,
} from 'redux';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

let store = createStore(todos, ['Use Redux'])

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the web'
})

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FollowingComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    ProjectPipeFilterPipe,
    ProjectComponent,
    ProjectListComponent,
    ProjectTypeComponent
  ],
  imports: [
    NgReduxModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PipesModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  constructor() {

    console.log(store.getState());
    // [ 'Use Redux', 'Read the docs' ]

  }

}
