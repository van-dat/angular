import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieComponent } from './pie/pie.component';
import { LineComponent } from './line/line.component';

const routes: Routes = [
  {
    path: '',
    component: PieComponent,
  },
  {
    path: 'pie',
    component: PieComponent,
    
  },
  {
    path: 'line',
    component: LineComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AnalystRouteModule { }
