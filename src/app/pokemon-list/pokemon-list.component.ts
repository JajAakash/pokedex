import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonDetailsService } from './pokemon-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons:any;
  counter=0;
  count=0;
  flag:boolean=true;
  searchBarform:FormGroup;
  
  constructor(private router:Router,private formbuilder: FormBuilder,private pokemonsService:PokemonDetailsService) { }

  async pokemons_details(url:string){

    this.pokemons = await this.pokemonsService.getPokemons(url).toPromise();
    console.log(this.pokemons);
    for(var key in this.pokemons)
   {
      if(key=="results" && this.flag){
        for(var i of this.pokemons[key]){
        
            this.count+=1;
          
          }
         }

      if(key=="results" && !this.flag){
        for(var i of this.pokemons[key]){
          console.log("this.flag=",this.flag)
        
            this.count-=1;
          }
          
         }
      }
   }
   
  next(nextUrl:string){
    this.pokemons_details(nextUrl);
    this.flag=true;
    
  }

  previous(prevUrl:string){
    this.flag=false
    this.pokemons_details(prevUrl);

  }

  desc(descUrl:string,name:string){
    this.pokemonsService.descUrl=descUrl;
    this.router.navigate(['/pokemon',name])
  }
async searchBar(){
  let param=this.searchBarform.value.param
  let searchres=await this.pokemonsService.searchbar(param).toPromise();
  console.log(" not found",searchres)
  this.pokemonsService.searchRes=searchres;
  this.router.navigate(['/pokemon',param]);
}
  ngOnInit() {
    let url="https://pokeapi.co/api/v2/pokemon/";
    this.pokemons_details(url);
    this.searchBarform=this.formbuilder.group({
      param: [null,[Validators.required]]
    });
    
  }

}
