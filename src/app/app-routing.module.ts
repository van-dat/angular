import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {path:'',
    loadChildren: ()=> import('./pages/dashboard/dashboard.module').then(m=>DashboardModule)},
      {
        path: 'tk', loadChildren: () => import('./pages/tk/tk.module').then(m=> m.TkModule),
        data: {}
      }, 
      {
        path: 'ct', loadChildren: () => import('./pages/chamcong/chamcong.module').then(m => m.ChamcongModule)
      }
      // , {
      //   path: 'pie',
      //   loadChildren: () => import('./components/pie/pie.module').then(m=> m.PieModule)
      // },
      ,
      {
        path: 'line',
        loadChildren: () => import('./components/line/line.module').then(m=> m.LineModule)
      }
      // ,
      // {
      //   path: 'analyst',
      //   loadChildren: () => import('./pages/analyst/analyst.module').then(m=> m.AnalystModule)
      // }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' , useHash: true})],
  exports: [RouterModule],

})
export class AppRoutingModule { }
