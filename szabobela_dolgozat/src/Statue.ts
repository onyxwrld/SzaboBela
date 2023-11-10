import { Artwork } from "./Artowrk";


export class Statue implements Artwork {
    height: number;
  
    constructor(public title: string, public year: number, public price: number, height: number) {
      this.title = title;
      this.year = year;
      this.price = price;
      this.height = height;
    }
  }