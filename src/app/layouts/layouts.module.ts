import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutsComponent } from './layouts.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FormsModule } from '@angular/forms';
import { FiltersModule } from '../components/filters/filters.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutsComponent,
    SidebarComponent,
    MenuBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    SidebarModule,
    BreadcrumbModule,
    FormsModule,
    FiltersModule,
  ],
  exports: [LayoutsComponent],
})
export class LayoutsModule {}
