import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageEmployeePage } from './home-page-employee.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageEmployeePageRoutingModule {}
