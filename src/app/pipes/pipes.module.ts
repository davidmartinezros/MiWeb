import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe.url.pipe';
import { SafeStylePipe } from './safe.style.pipe';
import { ProjectPipeFilter } from './project-pipe-filter.pipe'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafeUrlPipe,
    SafeStylePipe,
    ProjectPipeFilter
  ],
  exports: [
    SafeUrlPipe,
    SafeStylePipe,
    ProjectPipeFilter
  ]
})
export class PipesModule { }
