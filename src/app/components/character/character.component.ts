import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/starwars.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
      this.starWarsService.getAllCharacters().subscribe((response)=>{
        console.log(response);
      })
  }


}
