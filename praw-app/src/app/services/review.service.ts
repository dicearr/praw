import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class ReviewService {

  private url: string = '/api/review';

  constructor(private http: Http) { }

  addReview(review) {
    return this.http.post(this.url, review);
  }

  getReviews(id) {
    const params = new URLSearchParams();
    params.append('place_id', id);
    const options = new RequestOptions({ params });
    return this.http.get(this.url, options).map(res => res.json());
  }

}
