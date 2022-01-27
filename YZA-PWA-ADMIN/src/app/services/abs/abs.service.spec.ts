import { TestBed } from '@angular/core/testing';

import { ABSService } from './abs.service';

describe('ABSService', () => {
  let service: ABSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ABSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
