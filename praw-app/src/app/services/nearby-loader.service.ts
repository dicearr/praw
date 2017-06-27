import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ReviewService } from './review.service';
import { } from '@types/googlemaps';
import { Observable } from 'rxjs';

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

  getPlacesService(map) {
    if (this.ps === undefined) {
      this.ps = new google.maps.places.PlacesService(map)
    }
    return this.ps
  }

  getPlaceInfo(placeId, map) : Promise<any> {
    return Observable.create(async (observer) => {
      await this.loader.load();
      this.getPlacesService(map).getDetails({ placeId }, (res, status) => {
        if (status.toString() !== 'OK') {
          observer.error(status)
        } else {
          observer.next(res)
          observer.complete()
        }
      });
    });
  }
}
