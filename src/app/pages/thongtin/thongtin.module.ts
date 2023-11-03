import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongtinComponent } from './thongtin.component';
import { ThongtinRouteModule } from './thongtin-routing.module';
import { FloatlabelDemoModule } from 'src/app/components/floatlabel/floatlabeldemo.module';



@NgModule({
  declarations: [
    ThongtinComponent
  ],
  imports: [
    CommonModule,
    ThongtinRouteModule,
    FloatlabelDemoModule
  ]
})
export class ThongtinModule { }
