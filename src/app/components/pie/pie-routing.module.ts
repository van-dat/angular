import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieComponent } from './pie.component';

const routes: Routes = [
  {
    path: '',
    component: PieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PieRouteModule { }
