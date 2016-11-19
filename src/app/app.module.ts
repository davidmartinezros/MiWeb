import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './project.service';

import { MyCustomHttp } from './my-custom-http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';

import './rxjs-extensions';
import { ProjectPipeFilterPipe } from './project-pipe-filter.pipe';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    ProjectPipeFilterPipe,
    ProjectComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    ProjectService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
