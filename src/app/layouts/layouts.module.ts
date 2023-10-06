import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutsComponent } from './layouts.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutsComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    SidebarModule,
  ],
  exports: [LayoutsComponent],
})
export class LayoutsModule { }
