import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieListService } from '../movies-list/movie-list.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  movie!: Movie;
  title!:string;


  constructor( private movieListService: MovieListService,
    private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.title=params['title']
        this.movie=this.movieListService.getMovie(this.title)
      }
    )
  }

  onAddToFav(){
    this.movieListService.favMovies.push(this.movie)

  }
}
