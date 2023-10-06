import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { TkComponent } from './tk.component';
import { TkRouteModule } from './tk-routing.module';



@NgModule({
  declarations: [
    TkComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    TkRouteModule
  ]
})
export class TkModule { }
