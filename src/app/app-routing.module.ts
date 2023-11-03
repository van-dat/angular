import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'home',
  component: LayoutsComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => DashboardModule)
    },
    {
      path: 'tk', loadChildren: () => import('./pages/tk/tk.module').then(m => m.TkModule),
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
      loadChildren: () => import('./components/line/line.module').then(m => m.LineModule)
    }
    ,
    {
      path: 'info',
      loadChildren: () => import('./pages/thongtin/thongtin.module').then(m => m.ThongtinModule)
    },
    {
      path: 'create',
      loadChildren: () => import('./components/form/form.module').then(m => m.FormModule)
    }
  ]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', useHash: true })],
  exports: [RouterModule],

})
export class AppRoutingModule { }
