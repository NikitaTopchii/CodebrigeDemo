import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';

describe('NewsFeedService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
