import { Pokemon } from './pokemon';

describe('Pokemon', () => {
	it('should create an instance', () => {
		expect(new Pokemon()).toBeTruthy();
	});

	it('should create an clone < 10', (done) => {
		Pokemon.clone({ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' });
		done();
	});

	it('should create an clone < 100', (done) => {
		Pokemon.clone({ name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' });
		done();
	});

	it('should create an clone > 100', (done) => {
		Pokemon.clone({ name: 'mew', url: 'https://pokeapi.co/api/v2/pokemon/151/' });
		done();
	});
});
