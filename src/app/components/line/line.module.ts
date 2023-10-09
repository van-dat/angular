import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LineRouteModule } from './line-routing.module';




@NgModule({
  declarations: [LineComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    LineRouteModule
  ],
  exports: [LineComponent]
})
export class LineModule { }
