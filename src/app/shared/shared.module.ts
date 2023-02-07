import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatCheckboxModule
	],
	exports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatCheckboxModule
	]
})
export class SharedModule { }
