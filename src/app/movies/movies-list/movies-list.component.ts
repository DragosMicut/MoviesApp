import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieListService } from './movie-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  movies!: Movie[]

  constructor(private movieListService:MovieListService) { }

  ngOnInit(): void {
    this.movies = this.movieListService.getMovies()
  }


}
