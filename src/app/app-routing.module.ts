import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { ViewCharacterComponent } from './components/view-character/view-character.component';

const routes: Routes = [
{
  path: 'characters',
  component: ViewCharacterComponent
},
{
  path: 'characters/:id',
  component: CharacterComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
