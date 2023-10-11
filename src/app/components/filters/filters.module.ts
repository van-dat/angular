import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SidebarModule,
    CalendarModule,
    DropdownModule,
    AutoCompleteModule
  ], exports : [FiltersComponent]
})
export class FiltersModule { }
