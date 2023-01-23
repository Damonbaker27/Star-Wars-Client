import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'src/app/services/starwars.service';
import { Character } from 'src/app/models/character.model';
import { HomeWorld } from 'src/app/models/homeworld.model';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {

  character :Character | undefined;
  homeWorld :HomeWorld | undefined;

  constructor(private route: ActivatedRoute, private starWarsService: StarWarsService){}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params)=> {
      const id = params.get('id');

      console.log(id);

      if(id != null){
        this.starWarsService.getCharacterById(id).subscribe((response)=>{
          this.character = response;
        })
      }

      if(this.character != null){
        this.starWarsService.getPlanetById(this.character.homeWorldId).subscribe((response)=>{
          this.homeWorld = response;
        })
      }
    })
  }


}
