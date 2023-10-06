import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashRouteModule } from './dashboard-routing.module';



@NgModule({
  declarations: [ 
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashRouteModule,
  ],
})
export class DashboardModule { }
