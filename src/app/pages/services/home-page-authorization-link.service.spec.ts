import { TestBed } from '@angular/core/testing';

import { HomePageAuthorizationLinkService } from './home-page-authorization-link.service';

describe('HomePageAuthorizationLinkService', () => {
  let service: HomePageAuthorizationLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageAuthorizationLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
