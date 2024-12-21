import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageGuestPageRoutingModule } from './register-page-guest-routing.module';

import { RegisterPageGuestPage } from './register-page-guest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageGuestPageRoutingModule
  ],
  declarations: [RegisterPageGuestPage]
})
export class RegisterPageGuestPageModule {}
