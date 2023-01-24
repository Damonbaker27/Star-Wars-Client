import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/starwars.service';
import { Film } from 'src/app/models/Film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private starWarsService: StarWarsService){}

  Films : Film[] = [];

  ngOnInit(): void {
      this.starWarsService.getAllFilms().subscribe((response)=>{
        this.Films = response;
      })
  }


}
