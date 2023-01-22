import { Component, OnInit } from '@angular/core';
import { StarShip } from 'src/app/models/starship.model';
import { StarWarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  constructor(private starWarsService: StarWarsService){}

  starships : StarShip[] = [];

  ngOnInit(): void {
      this.starWarsService.getAllStarShips().subscribe((response)=>{
        console.log(response);
        this.starships = response;
      })
  }


}
