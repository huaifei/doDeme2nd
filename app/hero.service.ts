/**
 * Created by huaifei.zhang on 2017/1/6.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from './hero.component';
// import { HEROES } from './mock-heroes';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  //get mock data from json file directly
  // getHero():Promise<Hero[]>{
  //   return Promise.resolve(HEROES);
  // }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHero());
  }

  getHeroById(id:number): Promise<Hero[]> {
    return this.getHero().then(heroes => heroes.find(hero => hero.id === id))
  }

}
