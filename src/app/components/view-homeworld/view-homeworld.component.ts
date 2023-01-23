import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeWorld } from 'src/app/models/homeworld.model';
import { StarWarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-view-homeworld',
  templateUrl: './view-homeworld.component.html',
  styleUrls: ['./view-homeworld.component.css']
})
export class ViewHomeworldComponent implements OnInit {

  homeworld :HomeWorld | undefined;


  constructor(private route: ActivatedRoute, private starWarsService: StarWarsService){
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params)=> {
      const id = params.get('id');

      console.log('the id is');


      if(id != null){
        this.starWarsService.getPlanetById(id).subscribe(response =>{
          this.homeworld = response;
        })
      }
    })


  }


}
