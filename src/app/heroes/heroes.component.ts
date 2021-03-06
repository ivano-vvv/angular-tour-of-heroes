import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Array<Hero>;

  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
  ) {}

  onClick = (hero: Hero): void => {
    this.selectedHero = hero;
    this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  };

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
