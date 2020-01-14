import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDescComponent } from './pokemon-desc/pokemon-desc.component';

import { PokemonDetailsService } from './pokemon-list/pokemon-details.service';

export function socialConfigs() {  }  
@NgModule({
  declarations: [
    AppComponent,PokemonListComponent,PokemonDescComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    PokemonDetailsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }