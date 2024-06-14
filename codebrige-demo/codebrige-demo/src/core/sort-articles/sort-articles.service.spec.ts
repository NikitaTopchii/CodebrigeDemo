import { TestBed } from '@angular/core/testing';

import { SortArticlesService } from './sort-articles.service';

describe('SortNewsService', () => {
  let service: SortArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
