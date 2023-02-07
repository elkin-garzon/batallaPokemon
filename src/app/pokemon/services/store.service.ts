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

	public rowsPokemon: Pokemon[] = [];
	private changeRowsPokemon = new BehaviorSubject<Pokemon[]>([]);
	public changeRowsPokemon$ = this.changeRowsPokemon.asObservable();


	constructor() { }

	detailPokemon(row: Pokemon) {
		this.pokemon = row;
		this.changePokemon.next(this.pokemon);
	}

	battlePokemons(row: Pokemon) {
		if (this.rowsPokemon.filter(fil => fil.name == row.name).length == 0 && this.rowsPokemon.length < 2) {
			this.rowsPokemon.push(row);
		} else if (this.rowsPokemon.filter(fil => fil.name == row.name).length > 0) {
			for (let i = 0; i < this.rowsPokemon.length; i++) {
				if (this.rowsPokemon[i].name === row.name) {
					this.rowsPokemon.splice(i, 1);
				}
			}
		}
		this.changeRowsPokemon.next(this.rowsPokemon);
	}
}
