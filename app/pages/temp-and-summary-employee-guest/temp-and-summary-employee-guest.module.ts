import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempAndSummaryEmployeeGuestPageRoutingModule } from './temp-and-summary-employee-guest-routing.module';

import { TempAndSummaryEmployeeGuestPage } from './temp-and-summary-employee-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempAndSummaryEmployeeGuestPageRoutingModule
  ],
  declarations: [TempAndSummaryEmployeeGuestPage]
})
export class TempAndSummaryEmployeeGuestPageModule {}
