import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})

export class HeroListComponent implements OnInit {
  // hello = '';
  hero = new Hero(0, '', 0, 0, 0);
  heroes: Hero[];

  constructor(private readonly heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
  }

  addHero() {
    this.heroService.addToHeros(this.hero);
  }
}
