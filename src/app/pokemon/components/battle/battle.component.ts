import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ServiceService } from '../../services/service.service';
import { StoreService } from '../../services/store.service';

@Component({
	selector: 'app-battle',
	templateUrl: './battle.component.html',
	styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

	public battleRowsPokemons$: any;
	public rowsBattle: Pokemon[] = [];

	constructor(
		private store: StoreService,
		private service: ServiceService,
	) {
		this.battleRowsPokemons$ = this.store.changeRowsPokemon$;
	}

	ngOnInit(): void {
		this.battleRowsPokemons$.subscribe((resp: any[]) => {
			if (resp.length > 0) {
				this.rowsBattle = resp
			}
		})
	}

	renderImage(row: Pokemon) {
		return this.service.renderImage(row);
	}
}
