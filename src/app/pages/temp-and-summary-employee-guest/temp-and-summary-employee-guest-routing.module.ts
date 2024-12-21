import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempAndSummaryEmployeeGuestPage } from './temp-and-summary-employee-guest.page';

const routes: Routes = [
  {
    path: '',
    component: TempAndSummaryEmployeeGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempAndSummaryEmployeeGuestPageRoutingModule {}
