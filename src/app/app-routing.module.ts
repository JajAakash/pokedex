import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDescComponent } from './pokemon-desc/pokemon-desc.component';

const routes: Routes = [{path: 'pokemon', component:PokemonListComponent},
{path: 'pokemon/:param', component:PokemonDescComponent},
{ path: '', redirectTo: '/pokemon', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
