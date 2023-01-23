import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/starwars.service';
import { Character } from 'src/app/models/character.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private starWarsService: StarWarsService) {}

  characters: Character[] = [];

  ngOnInit(): void {
      this.starWarsService.getAllCharacters().subscribe((response)=>{
        this.characters = response;
      })
  }


}
