import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewQrcodePageEmployeePage } from './view-qrcode-page-employee.page';

const routes: Routes = [
  {
    path: '',
    component: ViewQrcodePageEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewQrcodePageEmployeePageRoutingModule {}
