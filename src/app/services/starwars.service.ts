import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { HomeWorld } from '../models/homeworld.model';
import { StarShip } from '../models/starship.model';
import { Film } from '../models/Film.model';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  baseUrl = 'https://localhost:7073'

  constructor(private http :HttpClient) { }

  getAllCharacters() :Observable<Character[]>{
    return this.http.get<Character[]>(this.baseUrl + '/api/Characters');
  }

  getCharacterById(id : string) :Observable<Character>{
    return this.http.get<Character>(this.baseUrl + '/api/Characters/' + id);
  }


  getAllPlanets() :Observable<HomeWorld[]>{
    return this.http.get<HomeWorld[]>(this.baseUrl + '/api/homeworlds');
  }

  getPlanetById(id : string) :Observable<HomeWorld>{
    return this.http.get<HomeWorld>(this.baseUrl + '/api/homeworlds/' + id);
  }


  getAllStarShips() :Observable<StarShip[]>{
    return this.http.get<StarShip[]>(this.baseUrl + '/api/starships');
  }

  getAllFilms() :Observable<Film[]>{
    return this.http.get<Film[]>(this.baseUrl + '/api/films');
  }


}
