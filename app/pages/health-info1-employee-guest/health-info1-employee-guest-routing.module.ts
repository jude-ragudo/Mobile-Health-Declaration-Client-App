import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthInfo1EmployeeGuestPage } from './health-info1-employee-guest.page';

const routes: Routes = [
  {
    path: '',
    component: HealthInfo1EmployeeGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthInfo1EmployeeGuestPageRoutingModule {}
