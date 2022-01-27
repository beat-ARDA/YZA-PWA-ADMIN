import { TestBed } from '@angular/core/testing';

import { APService } from './ap.service';

describe('APService', () => {
  let service: APService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
