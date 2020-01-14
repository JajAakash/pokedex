import { TestBed } from '@angular/core/testing';

import { PokemonDescService } from './pokemon-desc.service';

describe('PokemonDescService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonDescService = TestBed.get(PokemonDescService);
    expect(service).toBeTruthy();
  });
});
