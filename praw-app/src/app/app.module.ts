import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { NearbyLoaderService } from './nearby-loader.service';
import { ReviewService } from './review.service';
import { ReviewComponent } from './review/review.component';
import { StarRatingModule } from 'angular-star-rating';
import { ReviewFormComponent } from './review-form/review-form.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyDfu5l7pPZIlRaJn_BF_bOXf2twwz_aM',
      libraries: ['places']
    }),
    HttpModule,
    StarRatingModule,
    FormsModule
  ],
  providers: [NearbyLoaderService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
