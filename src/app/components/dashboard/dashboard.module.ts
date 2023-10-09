import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashRouteModule } from './dashboard-routing.module';
import { PieModule } from '../pie/pie.module';
import { LineModule } from '../line/line.module';



@NgModule({
  declarations: [ 
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashRouteModule,
    
    PieModule,
    LineModule
  ],
})
export class DashboardModule { }
