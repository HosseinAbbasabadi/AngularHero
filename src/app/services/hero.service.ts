import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = [
    new Hero(1, "Jagernat", 12,23,100),
    new Hero(2, "Trax", 13,11,150),
    new Hero(3, "Blodseeker", 123,45,800)
  ];

  constructor() { }
  
  getHeroes() : Hero[] {
    return this.heroes;
  }

  getHeroBy(id: number): Hero {
    return this.heroes.find(x=>x.id === id);
  }

  addToHeros(hero: Hero) {
    this.heroes.push(hero);
  }
}
