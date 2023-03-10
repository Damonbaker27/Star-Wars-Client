import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { ViewCharacterComponent } from './components/view-character/view-character.component';
import { ViewHomeworldComponent } from './components/view-homeworld/view-homeworld.component';
import { HomeworldsComponent } from './components/homeworlds/homeworlds.component';
import { FilmsComponent } from './components/films/films.component';
import { ViewFilmComponent } from './components/view-film/view-film.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { ViewStarshipComponent } from './components/view-starship/view-starship.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ViewCharacterComponent,
    ViewHomeworldComponent,
    HomeworldsComponent,
    FilmsComponent,
    ViewFilmComponent,
    StarshipsComponent,
    ViewStarshipComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
