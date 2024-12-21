import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthInfo3EmployeeGuestPage } from './health-info3-employee-guest.page';

const routes: Routes = [
  {
    path: '',
    component: HealthInfo3EmployeeGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthInfo3EmployeeGuestPageRoutingModule {}
