import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceService } from '../../services/service.service';
import { ListComponent } from './list.component';
import { of } from 'rxjs/internal/observable/of';
import { StoreService } from '../../services/store.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const dataResponse = {
	count: 1279,
	next: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=151',
	previous: null,
	results: [
		{
			name: 'bulbasaur',
			url: 'https://pokeapi.co/api/v2/pokemon/1/'
		}
	]
};

const fakeServiceService = jasmine.createSpyObj<ServiceService>(
	'ServiceService',
	{
		getData: of(dataResponse)
	}
);
const rowbattle = [
	{
		name: 'venusaur',
		url: 'https://pokeapi.co/api/v2/pokemon/3/'
	},
	{
		name: 'charizard',
		url: 'https://pokeapi.co/api/v2/pokemon/6/'
	}
]
const pokemon = { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' };
describe('ListComponent', () => {
	let component: ListComponent;
	let fixture: ComponentFixture<ListComponent>;
	let fakeService: ServiceService;

	beforeEach(async () => {
		fakeService = jasmine.createSpyObj<ServiceService>(
			{
				getData: of(dataResponse),
				renderImage: ''
			}
		);
		await TestBed.configureTestingModule({
			declarations: [ListComponent],
			providers: [
				StoreService,
				{ provide: ServiceService, useValue: fakeService }
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();

		fixture = TestBed.createComponent(ListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('detail', () => {
		fixture = TestBed.createComponent(ListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		component.detail(pokemon);
		expect(component).toBeTruthy();
	});

	it('addClassSelected', () => {
		fixture = TestBed.createComponent(ListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		component.rowsBattle = rowbattle;
		component.addClassSelected(pokemon);
		expect(component).toBeTruthy();
	});
});
