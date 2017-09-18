import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
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
export class AppModule { }
