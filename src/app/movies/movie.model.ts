import { Review } from "../shared/review.model";

export class Movie{
    public title: string;
    public description:string;
    public imagePath:string;
    public reviews!:Review[];

    constructor(title:string, desc:string, imagePath:string, reviews:Review[]){
        this.title = title;
        this.description = desc;
        this.imagePath = imagePath;
        this.reviews = reviews;
    }

}