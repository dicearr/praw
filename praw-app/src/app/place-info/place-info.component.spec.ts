import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInfoComponent } from './place-info.component';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { ReviewComponent } from '../review/review.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';

describe('PlaceInfoComponent', () => {
  let component: PlaceInfoComponent;
  let fixture: ComponentFixture<PlaceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaceInfoComponent,
        ReviewFormComponent,
        ReviewComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        StarRatingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
