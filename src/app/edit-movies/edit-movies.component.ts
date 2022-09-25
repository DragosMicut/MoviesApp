import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { MovieListService } from '../movies/movies-list/movie-list.service';
import { Review } from '../shared/review.model';
import { ReviewService } from './review.service';


@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css'],
  providers:[ReviewService]
})
export class EditMoviesComponent implements OnInit {
  reviews!:Review[];
  @Input()  movie!: Movie;


  constructor(private movieListService:MovieListService,
    private reviewService:ReviewService) { }

  ngOnInit() {
    this.reviews = this.reviewService.reviews;
  }

  onReviewAdded(review: Review){
    this.reviews.push(review);
  }

}
