import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ReviewService } from './review.service';
import { } from '@types/googlemaps';

@Injectable()
export class NearbyLoaderService {

  private ps: google.maps.places.PlacesService;

  constructor(private loader: MapsAPILoader, private rs: ReviewService) {}

  getNearbyPlaces(position, map) : Promise<any[]> {
    function formatData(el) {
      return {
        lat: el.geometry.location.lat(),
        lng: el.geometry.location.lng(),
        title: el.name,
        id: el.place_id
      }
    }
    return new Promise(async (resolve) => {
      await this.loader.load();
      if (this.ps === undefined) {
        this.ps = new google.maps.places.PlacesService(map);
      }
      this.ps.nearbySearch({
        location: position,
        type: 'restaurant',
        radius: 10000
      }, (res) => {
        resolve(res.map(formatData))
      })
    })
  }

  getPlaceInfo(placeId, map) : Promise<any> {
    return new Promise(async (resolve) => {
      await this.loader.load();
      if (this.ps === undefined) {
        this.ps = new google.maps.places.PlacesService(map);
      }
      this.ps.getDetails({ placeId }, (res, status) => {
        this.rs.getReviews({ place_id: placeId })
          .subscribe((localReviews) => {
            res.reviews = res.reviews.concat(localReviews.json());
            resolve(res);
          }, (err) => {
            console.error(err);
            resolve(res);
          })
      });
    })
  }
}
