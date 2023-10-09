import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieRouteModule } from './pie-routing.module';


@NgModule({
  declarations: [
    PieComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    PieRouteModule
  ],
  exports: [PieComponent]
})
export class PieModule { }
