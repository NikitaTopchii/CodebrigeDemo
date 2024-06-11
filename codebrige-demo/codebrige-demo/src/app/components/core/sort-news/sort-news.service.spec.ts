import { TestBed } from '@angular/core/testing';

import { SortNewsService } from './sort-news.service';

describe('SortNewsService', () => {
  let service: SortNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
