import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessagesService } from './messages.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messagesService: MessagesService) {}

  getHeroes(): Observable<Array<Hero>> {
    this.messagesService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
