import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/Film.model';
import { StarWarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-view-film',
  templateUrl: './view-film.component.html',
  styleUrls: ['./view-film.component.css']
})
export class ViewFilmComponent implements OnInit {

  film : Film | undefined;

  constructor(private starWarsService :StarWarsService, private route :ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const ID = params.get('id');

      if(ID != null){
        this.starWarsService.getFilmById(ID).subscribe(response=>{
          this.film = response;
        })
      }

    })




  }


}
