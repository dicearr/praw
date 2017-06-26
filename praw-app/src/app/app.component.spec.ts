import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { StarRatingModule } from 'angular-star-rating';
import { FormsModule }   from '@angular/forms';
import { NearbyLoaderService } from './nearby-loader.service';
import { ReviewService } from './review.service';
import { MapsAPILoader } from '@agm/core';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ReviewComponent,
        ReviewFormComponent
      ],
      imports: [
        AgmCoreModule,
        StarRatingModule,
        FormsModule,
        HttpModule
      ],
      providers: [
        NearbyLoaderService,
        MapsAPILoader,
        ReviewService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'PRAW'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PRAW');
  }));
});
