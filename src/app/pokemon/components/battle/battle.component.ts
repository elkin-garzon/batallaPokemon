import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from '../../models/pokemon';
import { ServiceService } from '../../services/service.service';
import { StoreService } from '../../services/store.service';

@Component({
	selector: 'app-battle',
	templateUrl: './battle.component.html',
	styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

	public rowsBattle: any[] = [];

	public double_damage_from: Number = -70;
	public double_damage_to: Number = 70;
	public half_damage_from: Number = -30;
	public half_damage_to: Number = 30;
	public no_damage_from: Number = 0;
	public no_damage_to: Number = 0;

	constructor(
		public store: StoreService,
		public service: ServiceService,
	) {
	}

	ngOnInit() {
		this.store.changeRowsPokemon$.subscribe((resp: any) => {
			if (resp.length > 0) {
				this.rowsBattle = resp;
				for (let row of this.rowsBattle) {
					row.valueBattle = 0;
					row.win = null;
					row.tie = false
				}
			}
		})
	}

	renderImage(row: Pokemon) {
		return this.service.renderImage(row);
	}

	async runBattle() {
		for (let row of this.rowsBattle) {
			row.types = await this.addTypes(row.url, 'types');
			row.damage = new Array();
			for (let damage of row.types) {
				row.damage.push( await  this.addTypes(damage.type.url, 'damage_relations'))
			}
			row.count = new Array()
		}
		await this.countPointsForbattle();

	}

	async addTypes(url: string, key: string) {
		return await this.service.getUrl(url).then((resp: any) => { return resp[key] });
	}

	async countPointsForbattle() {
		for (let i = 0; i < this.rowsBattle.length; i++) {
			let index: number;
			if (i == 0) {
				index = 1;
			} else {
				index = 0;
			}
			for (let types of this.rowsBattle[i].types) {
				for (let damage of this.rowsBattle[index].damage) {

					if (damage.double_damage_from.filter((fil: any) => fil.name === types.type.name).length > 0) {
						this.rowsBattle[index].count.push(this.double_damage_from)
					}

					if (damage.half_damage_from.filter((fil: any) => fil.name === types.type.name).length > 0) {
						this.rowsBattle[index].count.push(this.half_damage_from)
					}

					if (damage.no_damage_from.filter((fil: any) => fil.name === types.type.name).length > 0) {
						this.rowsBattle[index].count.push(this.no_damage_from)
					}


					if (damage.double_damage_to.filter((fil: any) => fil.name === types.type.name).length > 0) {
						this.rowsBattle[index].count.push(this.double_damage_to)
					}

					if (damage.half_damage_to.filter((fil: any) => fil.name === types.type.name).length > 0) {
						this.rowsBattle[index].count.push(this.half_damage_to)
					}

					if (damage.no_damage_to.filter((fil: any) => fil.name === types.type.name).length > 0) {
						this.rowsBattle[index].count.push(this.no_damage_to)
					}
				}
			}
		}

		for (let row of this.rowsBattle) {
			row.valueBattle = row.count.reduce((a: any, b: any) => a + b, 0)
		}

		if (this.rowsBattle[0].valueBattle == this.rowsBattle[1].valueBattle) {
			this.rowsBattle[0].tie = true;
			this.rowsBattle[1].tie = true
		} else if (this.rowsBattle[0].valueBattle > this.rowsBattle[1].valueBattle) {
			this.rowsBattle[0].win = true;
			this.rowsBattle[1].win = false
		} else {
			this.rowsBattle[0].win = false;
			this.rowsBattle[1].win = true
		}
	}
}

