import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { ViewCharacterComponent } from './components/view-character/view-character.component';
import { ViewHomeworldComponent } from './components/view-homeworld/view-homeworld.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ViewCharacterComponent,
    ViewHomeworldComponent
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
