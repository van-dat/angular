import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThongtinComponent } from './thongtin.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Thông tin'
    },
    component: ThongtinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ThongtinRouteModule { }
