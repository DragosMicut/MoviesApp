import { Component, OnInit, Input} from '@angular/core';
import { Review } from 'src/app/shared/review.model';
import { Movie } from '../movie.model';
import { MovieListService } from '../movies-list/movie-list.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  @Input()  movie!: Movie;


  constructor( private movieListService: MovieListService) { }

  ngOnInit() {

  }

  onAddToFav(){
    this.movieListService.favMovies.push(this.movie)

  }
}
