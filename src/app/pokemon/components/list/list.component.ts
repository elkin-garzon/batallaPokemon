import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Pokemon } from '../../models/pokemon';
import { StoreService } from '../../services/store.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	public rows: Pokemon[] = [];
	public detailData: Pokemon = new Pokemon();

	constructor(
		private service: ServiceService,
		private store: StoreService
	) {

	}

	ngOnInit(): void {
		this.service.getData().subscribe((resp: any) => {
			this.rows = resp.results;
		})
	}

	renderImage(row: Pokemon) {
		return this.service.renderImage(row);
	}

	detail(row: Pokemon) {
		this.detailData = row;
		this.store.detailPokemon(this.detailData);
	}
}
