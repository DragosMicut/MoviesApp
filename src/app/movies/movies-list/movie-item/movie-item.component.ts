import { Component, OnInit, Input} from '@angular/core';
import { Movie } from '../../movie.model';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: Movie;



  constructor(private movieListService: MovieListService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.movieListService.movieSelected.emit(this.movie)
  }

}
