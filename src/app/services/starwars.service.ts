import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  baseUrl = 'https://localhost:7073'

  constructor(private http :HttpClient) { }

  getAllCharacters() :Observable<Character>{
    return this.http.get<Character>(this.baseUrl + '/api/Characters')
  }



}
