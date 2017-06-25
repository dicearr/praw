import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})

export class ReviewComponent implements OnInit {

  @Input() rating: number;
  @Input() name: string;
  @Input() text: string;

  private viewText: boolean;

  constructor() { }

  ngOnInit() {
  }

}
