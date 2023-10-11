import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ChamcongComponent } from './chamcong.component';
import { ChamcongRouteModule } from './chamcong-routing.module';

@NgModule({
  declarations: [
    ChamcongComponent,
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    ChamcongRouteModule,
  ]
})
export class ChamcongModule { }
