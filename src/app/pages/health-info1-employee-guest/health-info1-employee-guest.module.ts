import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthInfo1EmployeeGuestPageRoutingModule } from './health-info1-employee-guest-routing.module';

import { HealthInfo1EmployeeGuestPage } from './health-info1-employee-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthInfo1EmployeeGuestPageRoutingModule
  ],
  declarations: [HealthInfo1EmployeeGuestPage]
})
export class HealthInfo1EmployeeGuestPageModule {}
