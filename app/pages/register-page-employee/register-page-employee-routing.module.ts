import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPageEmployeePage } from './register-page-employee.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPageEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageEmployeePageRoutingModule {}
