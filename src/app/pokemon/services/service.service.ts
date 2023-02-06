import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ServiceService {

	
	constructor(
		private HttpClient: HttpClient
	) {
	}

	getData(){
		let params = new HttpParams();
		params = params.append('limit', 151);
		return this.HttpClient.get<any>(`${environment.url_base}`, { params });
	}
}
