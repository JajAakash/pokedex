import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsService {

  constructor(private _http:HttpClient) { }
    descUrl:string;
    searchRes:any;

  getPokemons(url:string):Observable<any>{
    return this._http.get(url);
  }

  descPokemon(){
    return this._http.get(this.descUrl);
  }

  searchbar(param:string){
    
    let data=param.toLowerCase();
    return this._http.get("https://pokeapi.co/api/v2/pokemon/"+data);

  }
}
