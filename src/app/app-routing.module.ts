import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { FilmsComponent } from './components/films/films.component';
import { HomeComponent } from './components/home/home.component';
import { HomeworldsComponent } from './components/homeworlds/homeworlds.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { ViewCharacterComponent } from './components/view-character/view-character.component';
import { ViewFilmComponent } from './components/view-film/view-film.component';
import { ViewHomeworldComponent } from './components/view-homeworld/view-homeworld.component';
import { ViewStarshipComponent } from './components/view-starship/view-starship.component';

const routes: Routes = [
{
  path: 'characters',
  component: CharacterComponent
},
{
  path: 'characters/:id',
  component: ViewCharacterComponent
},
{
  path: 'homeworlds',
  component: HomeworldsComponent
},
{
  path:'homeworlds/:id',
  component: ViewHomeworldComponent
},
{
  path: 'films',
  component: FilmsComponent
},
{
  path:'films/:id',
  component: ViewFilmComponent

},
{
  path: 'starships',
  component: StarshipsComponent
},
{
  path: 'starships/:id',
  component: ViewStarshipComponent
},
{
  path: 'home',
  component: HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
