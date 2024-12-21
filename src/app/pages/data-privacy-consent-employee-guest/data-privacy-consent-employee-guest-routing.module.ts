import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataPrivacyConsentEmployeeGuestPage } from './data-privacy-consent-employee-guest.page';

const routes: Routes = [
  {
    path: '',
    component: DataPrivacyConsentEmployeeGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPrivacyConsentEmployeeGuestPageRoutingModule {}
