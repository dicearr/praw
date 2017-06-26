import { TestBed, inject } from '@angular/core/testing';

import { NearbyLoaderService } from './nearby-loader.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { HttpModule } from '@angular/http';

import { ReviewService } from './review.service';

describe('NearbyLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NearbyLoaderService, ReviewService, MapsAPILoader],
      imports: [AgmCoreModule, HttpModule]
    });
  });

  it('should be created', inject([NearbyLoaderService], (service: NearbyLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
