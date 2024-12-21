import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthInfo3EmployeeGuestPageRoutingModule } from './health-info3-employee-guest-routing.module';

import { HealthInfo3EmployeeGuestPage } from './health-info3-employee-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthInfo3EmployeeGuestPageRoutingModule
  ],
  declarations: [HealthInfo3EmployeeGuestPage]
})
export class HealthInfo3EmployeeGuestPageModule {}
