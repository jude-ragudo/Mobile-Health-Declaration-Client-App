import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationEmployeeGuestPage } from './authorization-employee-guest.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationEmployeeGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationEmployeeGuestPageRoutingModule {}
