import { TestBed, inject } from '@angular/core/testing';

import { ApitestService } from './apitest.service';

describe('ApitestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApitestService]
    });
  });

  it('should be created', inject([ApitestService], (service: ApitestService) => {
    expect(service).toBeTruthy();
  }));
});
