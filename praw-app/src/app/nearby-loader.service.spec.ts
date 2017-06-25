import { TestBed, inject } from '@angular/core/testing';

import { NearbyLoaderService } from './nearby-loader.service';

describe('NearbyLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NearbyLoaderService]
    });
  });

  it('should be created', inject([NearbyLoaderService], (service: NearbyLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
