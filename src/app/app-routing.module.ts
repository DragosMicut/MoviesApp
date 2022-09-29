import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditMoviesComponent } from "./edit-movies/edit-movies.component";
import { MovieDetailStartComponent } from "./movie-detail-start/movie-detail-start.component";
import { MoviesDetailComponent } from "./movies/movies-detail/movies-detail.component";
import { MovieItemComponent } from "./movies/movies-list/movie-item/movie-item.component";
import { MoviesComponent } from "./movies/movies.component";
import { WatchlistComponent } from "./watchlist/watchlist.component";


    const appRoutes: Routes=[
        {path:'', component: MoviesComponent},
        {path:'movies',component: MoviesComponent, children: [
            {path:'', component:MovieDetailStartComponent},
            {path:':title', component:MoviesDetailComponent}
        ]},
        {path:'reviews',component:EditMoviesComponent},
        {path:'favorits',component:WatchlistComponent},
        {path: '**', redirectTo:'/movies'}
    ]



@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRouting{

}