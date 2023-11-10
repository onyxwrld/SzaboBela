import { Artwork } from "./Artowrk";


export class Statue implements Artwork {
    height: number;
  
    constructor(public title: string, public year: number, public price: number, height: number) {
        this.height = height;
        this.price = price;
        this.year = year;
        this.title = title;
    }
  }