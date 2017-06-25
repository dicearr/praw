import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  private rating: number = 1;
  private text: string;
  private author_name: string;
  @Input() place_id: string;

  constructor(private rs: ReviewService) { }

  ngOnInit() {
  }

  onSubmit() {
    const { rating, text, author_name, place_id } = this;
    this.rs.addReview({ rating, text, author_name, place_id })
      .subscribe((res) => {}, (err) => {
        console.log(err);
      })
  }

  onChangeRate(rate) {
    this.rating = rate.rating;
  }

}
