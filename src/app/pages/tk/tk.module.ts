import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { TkComponent } from './tk.component';
import { TkRouteModule } from './tk-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    TkComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    TkRouteModule,
    TableModule,
    FormsModule,
    ButtonModule
  ]
})
export class TkModule { }
