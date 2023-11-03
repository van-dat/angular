import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FloatlabelDemoModule } from '../floatlabel/floatlabeldemo.module';
import { FormComponent } from './form.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FormRoutingModule,
		FloatlabelDemoModule
	],
	declarations: [FormComponent],
	exports: [FormComponent]
})
export class FormModule { }
