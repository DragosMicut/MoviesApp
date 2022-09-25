import { Review } from "../shared/review.model";

export class ReviewService{
    reviews: Review[]=[
        new Review("Lucifer","Some cool quote"),
        new Review("Lucifer","Some cool quote")
        ];


        getReviews(){
            return this.reviews.slice()
        }
}   