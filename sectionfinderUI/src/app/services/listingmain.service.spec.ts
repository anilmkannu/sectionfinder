import { TestBed } from '@angular/core/testing';

import { ListingmainService } from './listingmain.service';

describe('ListingmainService', () => {
  let service: ListingmainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingmainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
