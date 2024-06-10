import { TestBed } from '@angular/core/testing';

import { DateConvertorService } from './date-convertor.service';

describe('DataConvertorService', () => {
  let service: DateConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
