import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero = new Hero(0, "", 0, 0, 0);

  constructor(private readonly router: ActivatedRoute, private readonly heroService: HeroService) { 
    this.router.params.subscribe((params: ParamMap) => {
      const id = Number.parseInt(params["id"]);
      this.hero = this.heroService.getHeroBy(id);
    });
  }

  ngOnInit() {
  }

}
