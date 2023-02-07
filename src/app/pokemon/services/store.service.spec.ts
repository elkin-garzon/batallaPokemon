import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

const pokemon = { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' };

describe('StoreService', () => {
	let service: StoreService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(StoreService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('detailPokemon service', () => {
		service.detailPokemon(pokemon);
	});
});
