import { TestBed } from '@angular/core/testing';

import { SearchArticlesService } from './search-articles.service';

describe('SearchNewsService', () => {
  let service: SearchArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
