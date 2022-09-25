import { Component, OnInit, ViewChild,ElementRef, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/movies/movie.model';
import { MovieListService } from 'src/app/movies/movies-list/movie-list.service';
import { Review } from 'src/app/shared/review.model';

@Component({
  selector: 'app-review-movie',
  templateUrl: './review-movie.component.html',
  styleUrls: ['./review-movie.component.css']
})
export class ReviewMovieComponent implements OnInit {
  @ViewChild('movieInput') movieInputRef!: ElementRef;
  @ViewChild('commentInput') commentInputRef!: ElementRef;
  @Output() reviewAdded = new EventEmitter<Review>();

  movies:Movie[]=[]

  constructor(private movieListService:MovieListService) { }

  ngOnInit() {
    this.movies=this.movieListService.movies
  }

  onAddReview(){
    const newMovie = this.movieInputRef.nativeElement.value
    const newComment =this.commentInputRef.nativeElement.value
    const newReview = new Review(newMovie,newComment)
    this.reviewAdded.emit(newReview)
  }

  onRemoveReview(){

  }

}
