import { TestBed, inject } from '@angular/core/testing';

import { ReviewService } from './review.service';
import { HttpModule } from '@angular/http';

describe('ReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([ReviewService], (service: ReviewService) => {
    expect(service).toBeTruthy();
  }));
});
