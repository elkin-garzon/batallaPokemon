import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

@Injectable({
	providedIn: 'root'
})
export class ServiceService {


	constructor(
		private HttpClient: HttpClient
	) {
	}

	getData() {
		let params = new HttpParams();
		params = params.append('limit', 151);
		return this.HttpClient.get<any>(`${environment.url_base}`, { params });
	}

	getDetail(row: Pokemon) {
		return this.HttpClient.get<any>(`${environment.url_base}/${row.name}`);
	}

	getType(row: Pokemon) {
		return this.HttpClient.get<any>(`${environment.type}/${row.name}`);
	}




	renderImage(row: Pokemon) {
		return `../../../../assets/img_pokemons/${Pokemon.clone(row)}.png`;
	}
}
