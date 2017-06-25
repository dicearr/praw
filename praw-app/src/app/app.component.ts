import { Component, OnInit, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { NearbyLoaderService } from './nearby-loader.service';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
  title: string = 'PRAW';
  lat: number = 51.923682;
  lng: number = 4.467429000000038;
  geo: any;
  nearbyPlaces: Array<any> = [];
  place: any;
  placeClicked: boolean = false;
  review: boolean = true;

  @ViewChild('aux') aux: ElementRef;
  @ViewChild(AgmMap) agm: AgmMap;

  constructor(private loader: NearbyLoaderService) {
    if (navigator.geolocation !== undefined) {
      this.geo = navigator.geolocation;
    }
  }

  ngOnInit() {
    this.loader.getNearbyPlaces({
      lat: this.lat,
      lng: this.lng
    }, this.aux.nativeElement)
      .then((np) => this.nearbyPlaces = np);
    if (this.geo !== undefined) {
      this.geo.getCurrentPosition((pos) => {
        const position = {
          lng: pos.coords.longitude,
          lat: pos.coords.latitude
        }
        Object.assign(this, position);
        this.loader.getNearbyPlaces(position, this.aux.nativeElement)
          .then((np) => this.nearbyPlaces = np);
      });
    }
    this.redrawMap();
  }

  ngAfterViewInit() {
  }

  async redrawMap() {
    await this.agm.triggerResize();
    // Cast needed because _mapsWrapper is a private prop
    (this.agm as any)._mapsWrapper.setCenter({lat: this.lat, lng: this.lng});
  }

  onClicked(ev, id) {
    this.loader.getPlaceInfo(id, this.aux.nativeElement)
      .then((info) => {
        this.placeClicked = true;
        this.place = info;
        this.redrawMap();
      });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.redrawMap();
  }

}
