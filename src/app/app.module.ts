import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieItemComponent } from './movies/movies-list/movie-item/movie-item.component';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { ReviewMovieComponent } from './edit-movies/review-movie/review-movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MovieListService } from './movies/movies-list/movie-list.service';
import { AppRouting } from './app-routing.module';
import { MovieDetailStartComponent } from './movie-detail-start/movie-detail-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieItemComponent,
    EditMoviesComponent,
    MoviesDetailComponent,
    ReviewMovieComponent,
    WatchlistComponent,
    DropdownDirective,
    MovieDetailStartComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
