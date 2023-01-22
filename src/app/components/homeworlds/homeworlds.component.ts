import { Component, OnInit } from '@angular/core';
import { HomeWorld } from 'src/app/models/homeworld.model';
import { StarWarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-homeworlds',
  templateUrl: './homeworlds.component.html',
  styleUrls: ['./homeworlds.component.css']
})
export class HomeworldsComponent implements OnInit {

  constructor(private starWarsService: StarWarsService){}

  homeWorlds : HomeWorld[]=[];

  ngOnInit(): void {
      this.starWarsService.getAllPlanets().subscribe((response)=>{
        console.log(response);
        this.homeWorlds = response;
      })
  }
}
