import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamcongComponent } from './chamcong.component';

const routes: Routes = [
  {
    path: '',
    component: ChamcongComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ChamcongRouteModule { }
