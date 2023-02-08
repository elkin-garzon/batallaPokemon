import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ServiceService } from './service.service';

const dataResponse = {
	count: 1279,
	next: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=151',
	previous: null,
	results: [
		{
			name: 'bulbasaur',
			url: 'https://pokeapi.co/api/v2/pokemon/1/'
		}
	]
};

const dataResponseDetail = {
	abilities: [],
	base_experience: 267,
	forms: [],
	game_indices: [],
	height: 17,
	held_items: [],
	id: 6,
	is_default: true,
	location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/6/encounters',
	moves: [],
	name: 'charizard',
	order: 7,
	past_types: [],
	species: {},
	sprites: {},
	stats: [],
	types: [],
	weight: 905
};

const pokemon = { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' };

describe('ServiceService', () => {
	let service: ServiceService;
	let httpClientSpy: jasmine.SpyObj<HttpClient>;

	beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get', 'put', 'delete']);
		service = new ServiceService(httpClientSpy);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('getData service', (done: DoneFn) => {
		httpClientSpy.get.and.returnValue(of(dataResponse));
		service.getData().subscribe(resp => {
			expect(resp).toEqual(dataResponse)
			done()
		})
	});

	it('getDetail service', (done: DoneFn) => {
		httpClientSpy.get.and.returnValue(of(dataResponseDetail));
		service.getDetail(pokemon).subscribe(resp => {
			expect(resp).toEqual(dataResponseDetail)
			done()
		})
	});

	it('renderImage service', () => {
		httpClientSpy.get.and.returnValue(of(dataResponseDetail));
		service.renderImage(pokemon);
	});

	it('getUrl service', (done: DoneFn) => {
		httpClientSpy.get.and.returnValue(of({}));
		service.getUrl('https://pokeapi.co/api/v2/pokemon/6/').then(resp => {
			expect(resp).toEqual(dataResponse)
			done()
		})
	});

});
