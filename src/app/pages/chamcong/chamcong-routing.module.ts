import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamcongComponent } from './chamcong.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Chấm công'
    },
    component: ChamcongComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ChamcongRouteModule { }
