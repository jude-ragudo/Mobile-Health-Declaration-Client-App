import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataPrivacyConsentEmployeeGuestPageRoutingModule } from './data-privacy-consent-employee-guest-routing.module';

import { DataPrivacyConsentEmployeeGuestPage } from './data-privacy-consent-employee-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataPrivacyConsentEmployeeGuestPageRoutingModule
  ],
  declarations: [DataPrivacyConsentEmployeeGuestPage]
})
export class DataPrivacyConsentEmployeeGuestPageModule {}
