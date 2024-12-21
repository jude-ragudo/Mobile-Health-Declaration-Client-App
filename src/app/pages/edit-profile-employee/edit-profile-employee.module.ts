import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfileEmployeePageRoutingModule } from './edit-profile-employee-routing.module';

import { EditProfileEmployeePage } from './edit-profile-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileEmployeePageRoutingModule
  ],
  declarations: [EditProfileEmployeePage]
})
export class EditProfileEmployeePageModule {}
