import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { NearbyLoaderService } from './services/nearby-loader.service';
import { ReviewService } from './services/review.service';
import { ReviewComponent } from './review/review.component';
import { StarRatingModule } from 'angular-star-rating';
import { ReviewFormComponent } from './review-form/review-form.component';
import { FormsModule }   from '@angular/forms';
import { PlaceInfoComponent } from './place-info/place-info.component';
import { Routes, RouterModule } from '@angular/router';
import { PlaceResolver } from './place.resolver';

const routes: Routes = [{
  path: '#/review/:id/add',
  component: ReviewFormComponent
}, {
  path: '#/review/:id',
  component: PlaceInfoComponent,
  resolve: {
    place: PlaceResolver
  }
}]

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ReviewFormComponent,
    PlaceInfoComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyDfu5l7pPZIlRaJn_BF_bOXf2twwz_aM',
      libraries: ['places']
    }),
    RouterModule.forRoot(routes),
    HttpModule,
    StarRatingModule,
    FormsModule
  ],
  providers: [NearbyLoaderService, ReviewService, PlaceResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
