import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPageGuestPage } from './register-page-guest.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPageGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageGuestPageRoutingModule {}
