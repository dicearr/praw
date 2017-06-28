import { Component, OnInit, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { NearbyLoaderService } from './services/nearby-loader.service';
import { AgmMap } from '@agm/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'PRAW';
  lat: number = 51.923682;
  lng: number = 4.467429000000038;
  geo: any;
  nearbyPlaces: Array<any> = [];
  place: any = {};
  placeClicked: boolean = false;

  private aux;
  @ViewChild(AgmMap) agm: AgmMap;

  constructor(private loader: NearbyLoaderService, private router: Router) {
    if (navigator.geolocation !== undefined) {
      this.geo = navigator.geolocation;
    }
    this.aux = document.createElement('div')
  }

  ngOnInit() {
    this.loader.getNearbyPlaces({
      lat: this.lat,
      lng: this.lng
    }, this.aux)
      .then((np) => this.nearbyPlaces = np);
    if (this.geo !== undefined) {
      this.geo.getCurrentPosition((pos) => {
        const position = {
          lng: pos.coords.longitude,
          lat: pos.coords.latitude
        }
        Object.assign(this, position);
        this.loader.getNearbyPlaces(position, this.aux)
          .then((np) => this.nearbyPlaces = np);
      });
    }
    this.redrawMap();
  }

  async redrawMap() {
    await this.agm.triggerResize();
    // Cast needed because _mapsWrapper is a private prop
    (this.agm as any)._mapsWrapper.setCenter({lat: this.lat, lng: this.lng});
  }

  onClicked(ev, id) {
    this.place = this.nearbyPlaces[id]
    this.router.navigate(['#/review/:id', { id: this.place.id }])
    this.placeClicked = true
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.redrawMap();
  }

  componentAdded() {
    console.log(arguments)
  }

}
