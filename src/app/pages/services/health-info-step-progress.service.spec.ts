import { TestBed } from '@angular/core/testing';

import { HealthInfoStepProgressService } from './health-info-step-progress.service';

describe('HealthInfoStepProgressService', () => {
  let service: HealthInfoStepProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthInfoStepProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
