import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalystRouteModule } from './analyst-routing.module';
import { PieComponent } from './pie/pie.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LineComponent } from './line/line.component';


@NgModule({
  declarations: [
    PieComponent,
    LineComponent,
  ],
  imports: [
    CommonModule,
    AnalystRouteModule,
    HighchartsChartModule,
  ]
})
export class AnalystModule { }
