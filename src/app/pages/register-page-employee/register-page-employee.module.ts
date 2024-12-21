import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageEmployeePageRoutingModule } from './register-page-employee-routing.module';

import { RegisterPageEmployeePage } from './register-page-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageEmployeePageRoutingModule
  ],
  declarations: [RegisterPageEmployeePage]
})
export class RegisterPageEmployeePageModule {}
