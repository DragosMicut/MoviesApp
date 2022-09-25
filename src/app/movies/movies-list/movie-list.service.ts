import { EventEmitter } from "@angular/core";
import { Review } from "src/app/shared/review.model";
import { Movie } from "../movie.model";

export class MovieListService{
    movieSelected = new EventEmitter<Movie>()



    movies: Movie[]=[
        new Movie("Lucifer","A series that follows the story of a detective from hell! ","https://playtech.ro/stiri/wp-content/uploads/2021/03/C%C3%A2nd-apar-noi-episoade-din-Lucifer.-Partea-a-doua-din-sezonul-5-%C3%AEn-cur%C3%A2nd.jpg",
        [
            new Review('Lucifer',"Super cool!")
        ]),
        new Movie("Game of Thrones","A series that follows the story of a race to the thone! ","https://www.gadgetzone.ro/wp-content/uploads/2022/07/289582054_10159151347272734_919249932774953476_n.jpg",
        [
            new Review('Game of thones',"Super cool!")
        ]),
        new Movie("Friends","A series that follows the story of a group of friends! ","https://cdn.zutv.ro/wp-content/uploads/2022/07/1609160277572d6ca7.jpg",
        [
            new Review('Friends',"Super cool!")
        ]),

    ];

    


    favMovies: Movie[] =[
        this.movies[0]
    ]

    getMovies(){
        return this.movies.slice()
    }

    getFavMovies(){
        return this.favMovies.slice()
    }
}