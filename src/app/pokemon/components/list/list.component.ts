import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	private arraySubscription: Subscription[] = [];
	private rows: any[] = []

	constructor(
		private service: ServiceService
	) {

	}

	ngOnInit(): void {
		this.arraySubscription.push(
			this.service.getData().subscribe((resp: any) => {
				this.rows = resp.results;
				console.log(this.rows)
			})
		)
	}

	ngOnDestroy(): void {
		this.arraySubscription.forEach(subscription => subscription.unsubscribe());
	}
}
