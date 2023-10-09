import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { DashboardModule } from './components/dashboard/dashboard.module';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {path:'',
    loadChildren: ()=> import('./components/dashboard/dashboard.module').then(m=>DashboardModule)},
      {
        path: 'tk', loadChildren: () => import('./components/tk/tk.module').then(m=> m.TkModule)
      }, 
      {
        path: 'ct', loadChildren: () => import('./components/chamcong/chamcong.module').then(m => m.ChamcongModule)
      }
      , {
        path: 'pie',
        loadChildren: () => import('./components/pie/pie.module').then(m=> m.PieModule)
      },
      {
        path: 'line',
        loadChildren: () => import('./components/line/line.module').then(m=> m.LineModule)
      }
      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' , useHash: true})],
  exports: [RouterModule],

})
export class AppRoutingModule { }
