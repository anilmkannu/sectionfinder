import { TestBed } from '@angular/core/testing';

import { BrowsecategoryService } from './browsecategory.service';

describe('BrowsecategoryService', () => {
  let service: BrowsecategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowsecategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
