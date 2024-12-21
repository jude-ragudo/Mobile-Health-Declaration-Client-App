import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfileEmployeePage } from './edit-profile-employee.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfileEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileEmployeePageRoutingModule {}
