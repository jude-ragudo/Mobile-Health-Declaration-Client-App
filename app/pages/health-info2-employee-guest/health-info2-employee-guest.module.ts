import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthInfo2EmployeeGuestPageRoutingModule } from './health-info2-employee-guest-routing.module';

import { HealthInfo2EmployeeGuestPage } from './health-info2-employee-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthInfo2EmployeeGuestPageRoutingModule
  ],
  declarations: [HealthInfo2EmployeeGuestPage]
})
export class HealthInfo2EmployeeGuestPageModule {}
