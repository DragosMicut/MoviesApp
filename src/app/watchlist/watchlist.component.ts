import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { MovieListService } from '../movies/movies-list/movie-list.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  favMovies!: Movie[]

  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
    this.favMovies=this.movieListService.getFavMovies()
  }

}
