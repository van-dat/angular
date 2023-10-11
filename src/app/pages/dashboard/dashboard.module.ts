import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashRouteModule } from './dashboard-routing.module';
import { PieModule } from '../../components/pie/pie.module';
import { LineModule } from '../../components/line/line.module';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [ 
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashRouteModule,
    FormsModule,
    PieModule,
    LineModule,
    DropdownModule
  ],
})
export class DashboardModule { }
