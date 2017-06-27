import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ReviewService } from './services/review.service';
import { NearbyLoaderService } from './services/nearby-loader.service';



@Injectable()
export class PlaceResolver implements Resolve<any> {

  constructor(
    private rs: ReviewService,
    private nls: NearbyLoaderService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.rs.getReviews(route.params.id).combineLatest(
      this.nls.getPlaceInfo(route.params.id, document.createElement('div'))
    )
  }
}
