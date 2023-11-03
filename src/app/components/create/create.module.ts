import { NgModule } from '@angular/core';
import { CreateComponent } from './create.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CreateRoutingModule } from './create-routing.module';
import { FiltersModule } from '../filters/filters.module';


@NgModule({
	declarations: [CreateComponent],
	imports: [
		CommonModule,
		FormsModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputTextModule,
		ReactiveFormsModule,
		ButtonModule,
		ToastModule,
		ConfirmDialogModule,
		CreateRoutingModule,
		FiltersModule

	],
	exports: [CreateComponent]
})
export class CreateModule { }
