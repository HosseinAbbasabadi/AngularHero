import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  addHeroFrm = new FormGroup({
    name: new FormControl(),
    height: new FormControl(),
    weight: new FormControl(),
    power: new FormControl(),
  })

  constructor(private readonly heroService: HeroService) { }

  ngOnInit() {
  }

  addHero(heroFrm) {
    var hero = heroFrm.value;
    this.heroService.addToHeros(hero);
  }
}
