import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatTableModule
	],
	exports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule
	]
})
export class SharedModule { }
