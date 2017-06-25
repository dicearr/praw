import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class ReviewService {

  private url: string = 'http://localhost/api/review';

  constructor(private http: Http) { }

  addReview(review) {
    return this.http.post(this.url, review);
  }

  getReviews(query) {
    const params = new URLSearchParams();
    params.append('place_id', query.place_id);
    const options = new RequestOptions({ params });
    return this.http.get(this.url, options);
  }

}
