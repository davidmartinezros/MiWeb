import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './project.service';
import { ProjectSearchService } from './project-search.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';
import { ProjectSearchComponent } from './project-search/project-search.component';

import './rxjs-extensions';
import { ProjectPipeFilterPipe } from './project-pipe-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    ProjectSearchComponent,
    ProjectPipeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [
    ProjectService,
    ProjectSearchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
