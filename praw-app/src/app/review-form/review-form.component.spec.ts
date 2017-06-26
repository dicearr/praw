import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFormComponent } from './review-form.component';
import { FormsModule }   from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { ReviewService } from '../review.service';
import { HttpModule } from '@angular/http';

describe('ReviewFormComponent', () => {
  let component: ReviewFormComponent;
  let fixture: ComponentFixture<ReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewFormComponent ],
      imports: [
        StarRatingModule,
        HttpModule,
        FormsModule
      ],
      providers: [
        ReviewService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
