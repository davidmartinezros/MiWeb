/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectSearchService } from './project-search.service';

describe('Service: ProjectSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectSearchService]
    });
  });

  it('should ...', inject([ProjectSearchService], (service: ProjectSearchService) => {
    expect(service).toBeTruthy();
  }));
});
