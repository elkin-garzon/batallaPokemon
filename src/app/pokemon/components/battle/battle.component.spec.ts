import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceService } from '../../services/service.service';
import { StoreService } from '../../services/store.service';

import { BattleComponent } from './battle.component';
import { dataWin, dataWinTwo, dataTie } from './mock';

const pokemon = { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' };

describe('BattleComponent', () => {
	let component: BattleComponent;
	let fixture: ComponentFixture<BattleComponent>;
	let fakeService: ServiceService;

	beforeEach(async () => {
		fakeService = jasmine.createSpyObj<ServiceService>(
			{
				renderImage: ''
			}
		);

		await TestBed.configureTestingModule({
			declarations: [BattleComponent],
			providers: [
				StoreService,
				{ provide: ServiceService, useValue: fakeService }
			],
		}).compileComponents();

		fixture = TestBed.createComponent(BattleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {

		expect(component).toBeTruthy();
	});

	it('should renderImage', () => {
		fixture = TestBed.createComponent(BattleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.renderImage(pokemon)
		expect(component).toBeTruthy();
	});

	it('should countPointsForbattle win', () => {
		fixture = TestBed.createComponent(BattleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		component.rowsBattle = dataWin;
		component.countPointsForbattle()
		expect(component).toBeTruthy();
	});

	it('should countPointsForbattle tie', () => {
		fixture = TestBed.createComponent(BattleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		component.rowsBattle = dataTie;
		component.countPointsForbattle()
		expect(component).toBeTruthy();
	});

	it('should countPointsForbattle wintwo', () => {
		fixture = TestBed.createComponent(BattleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		component.rowsBattle = dataWinTwo;
		component.countPointsForbattle()
		expect(component).toBeTruthy();
	});

});
