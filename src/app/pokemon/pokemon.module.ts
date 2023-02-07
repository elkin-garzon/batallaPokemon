import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';
import { BattleComponent } from './components/battle/battle.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    BattleComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule,
  ]
})
export class PokemonModule { }
