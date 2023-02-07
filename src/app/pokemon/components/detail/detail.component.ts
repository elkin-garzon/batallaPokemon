import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ServiceService } from '../../services/service.service';
import { StoreService } from '../../services/store.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

	public detailPokemon$ = this.store.changePokemon$;
	public detail: any;
	public types: string;
	public stats: any[];
	public displayedColumns: string[] = ['name', 'base_stat', 'effort'];

	constructor(
		private service: ServiceService,
		private store: StoreService
	) {
	}

	ngOnInit() {
		this.detailPokemon$.subscribe((resp: any) => {
			this.detail = resp;
			this.getPokemon(this.detail);
		});
	}


	getPokemon(row: Pokemon) {
		if (row.name) {
			this.service.getDetail(row).subscribe((resp: any) => {
				this.types = String(resp.types.map((map: any) => String(map.type.name)));
				this.stats = resp.stats;
			})
		}
	}

	renderImage(row: Pokemon) {
		return this.service.renderImage(row);
	}
}
