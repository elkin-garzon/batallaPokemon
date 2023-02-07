import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class StoreService {

	private pokemon: Pokemon = new Pokemon();
	private changePokemon = new BehaviorSubject<Pokemon>(new Pokemon());
	public changePokemon$ = this.changePokemon.asObservable();

	constructor() { }

	detailPokemon(row: Pokemon) {
		this.pokemon = row;
		this.changePokemon.next(this.pokemon);
	}
}
