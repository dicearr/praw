import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.css']
})
export class PlaceInfoComponent implements OnInit {

  private place: any = {};
  private error: string;

  constructor(private route: ActivatedRoute) {
    route.data.subscribe((message) => {
      if (message.place !== undefined) {
        this.place = message.place[1]
        this.place.reviews = message.place[0].concat(this.place.reviews)
      }
    }, (error) => {
      this.error = 'Imposible to fetch the information';
    });
  }

  ngOnInit() {
  }

}
