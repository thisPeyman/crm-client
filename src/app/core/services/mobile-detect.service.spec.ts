import { TestBed } from '@angular/core/testing';

import { MobileDetectService } from './mobile-detect.service';

describe('MobileDetectService', () => {
  let service: MobileDetectService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MobileDetectService] });
    service = TestBed.inject(MobileDetectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
