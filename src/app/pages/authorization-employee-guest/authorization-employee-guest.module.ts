import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorizationEmployeeGuestPageRoutingModule } from './authorization-employee-guest-routing.module';

import { AuthorizationEmployeeGuestPage } from './authorization-employee-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorizationEmployeeGuestPageRoutingModule
  ],
  declarations: [AuthorizationEmployeeGuestPage]
})
export class AuthorizationEmployeeGuestPageModule {}
