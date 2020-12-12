import { TestBed } from '@angular/core/testing';

import { ThumbhomepagelistingService } from './thumbhomepagelisting.service';

describe('ThumbhomepagelistingService', () => {
  let service: ThumbhomepagelistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThumbhomepagelistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
