import { TestBed } from '@angular/core/testing';

import { ThumbhomedetailsService } from './thumbhomedetails.service';

describe('ThumbhomedetailsService', () => {
  let service: ThumbhomedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThumbhomedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
