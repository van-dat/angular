import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TkComponent } from './tk.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Thông tin'
    },
    component: TkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class TkRouteModule { }
