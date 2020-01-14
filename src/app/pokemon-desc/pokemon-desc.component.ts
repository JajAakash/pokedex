import { Component, OnInit } from '@angular/core';
import { PokemonDetailsService } from '../pokemon-list/pokemon-details.service';

@Component({
  selector: 'app-pokemon-desc',
  templateUrl: './pokemon-desc.component.html',
  styleUrls: ['./pokemon-desc.component.css']
})
export class PokemonDescComponent implements OnInit {
detailsPoke:any
  constructor(private pokemonServ:PokemonDetailsService) { }

  async descPokemon(){
    
     this.detailsPoke =await this.pokemonServ.descPokemon().toPromise();
  }

  
  ngOnInit() {
    if(this.pokemonServ.searchRes==null){
    this.descPokemon();
    }
    else{
      
      this.detailsPoke=this.pokemonServ.searchRes;
      this.pokemonServ.searchRes=null;
      
    }
    
  }

}
