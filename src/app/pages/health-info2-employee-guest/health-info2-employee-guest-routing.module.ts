import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthInfo2EmployeeGuestPage } from './health-info2-employee-guest.page';

const routes: Routes = [
  {
    path: '',
    component: HealthInfo2EmployeeGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthInfo2EmployeeGuestPageRoutingModule {}
