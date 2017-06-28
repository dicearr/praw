import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  private rating: number = 1;
  private text: string;
  private author_name: string;
  private place_id: string;
  private error: string;

  constructor(
    private rs: ReviewService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe(myParams => { this.place_id = myParams.id })
  }

  ngOnInit() {
  }

  onSubmit() {
    const { rating, text, author_name, place_id } = this;
    this.rs.addReview({ rating, text, author_name, place_id })
      .subscribe((res) => {
        this.router.navigate(['#/review/:id', { id: this.place_id }])
      }, (err) => {
        this.error = 'Imposible to submit your review'
      })
  }

  onChangeRate(rate) {
    this.rating = rate.rating;
  }

}
