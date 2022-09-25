import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MovieListService } from './movies-list/movie-list.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selectedMovie!:Movie;

  constructor(private movieListService: MovieListService) { }

  ngOnInit() {
    this.movieListService.movieSelected.subscribe(
      (movie:Movie)=>{
        this.selectedMovie = movie
      }
    )
  }

}
