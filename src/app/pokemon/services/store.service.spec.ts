import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';

const pokemon = { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' };
const rowbattle = [
	{
		name: 'venusaur',
		url: 'https://pokeapi.co/api/v2/pokemon/3/'
	},
	{
		name: 'charizard',
		url: 'https://pokeapi.co/api/v2/pokemon/6/'
	}
]

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

	it('battlePokemons service', () => {
		service.rowsPokemon= rowbattle;
		service.battlePokemons(rowbattle[0]);
	});

	it('battlePokemons service duplicate pokemon', () => {
		service.rowsPokemon= rowbattle;
		service.battlePokemons(pokemon);
	});

});
