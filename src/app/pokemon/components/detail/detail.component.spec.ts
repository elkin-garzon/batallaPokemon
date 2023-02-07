import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { ServiceService } from '../../services/service.service';
import { StoreService } from '../../services/store.service';

import { DetailComponent } from './detail.component';

const displayedColumns: string[] = ['name', 'base_stat', 'effort'];

const dataResponseDetail = {
	abilities: [],
	base_experience: 267,
	forms: [],
	game_indices: [],
	height: 17,
	held_items: [],
	id: 6,
	is_default: true,
	location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/6/encounters',
	moves: [],
	name: 'charizard',
	order: 7,
	past_types: [],
	species: {},
	sprites: {},
	stats: [],
	types: [
        {
            slot: 1,
            type: {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/'
            }
        },
        {
            slot: 2,
            type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/'
            }
        }
    ],
	weight: 905
};
const pokemon = { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' };

describe('DetailComponent', () => {
	let component: DetailComponent;
	let fixture: ComponentFixture<DetailComponent>;
	let fakeService: ServiceService;

	beforeEach(async () => {
		fakeService = jasmine.createSpyObj<ServiceService>(
			{
				getDetail: of(dataResponseDetail),
				renderImage: ''
			}
		);

		await TestBed.configureTestingModule({
			declarations: [DetailComponent],
			providers: [
				StoreService,
				{ provide: ServiceService, useValue: fakeService }
			],
		}).compileComponents();

		fixture = TestBed.createComponent(DetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		fixture = TestBed.createComponent(DetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should getPokemon', () => {
		fixture = TestBed.createComponent(DetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.getPokemon(pokemon)
		expect(component).toBeTruthy();
	});

	it('should renderImage', () => {
		fixture = TestBed.createComponent(DetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.renderImage(pokemon)
		expect(component).toBeTruthy();
	});

	it('should getPokemon', () => {
		fixture = TestBed.createComponent(DetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.getPokemon(pokemon)
		expect(component).toBeTruthy();
	});
});
