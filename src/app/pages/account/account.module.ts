import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRouteModule } from './account-routing.module';
import { CreateModule } from 'src/app/components/create/create.module';
import { AccountComponent } from './account.component';
import { FormModule } from 'src/app/components/form/form.module';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRouteModule,
    CreateModule,
    FormModule
    
  ]
})
export class AccountModule { }
