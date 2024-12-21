import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewQrcodePageEmployeePageRoutingModule } from './view-qrcode-page-employee-routing.module';

import { ViewQrcodePageEmployeePage } from './view-qrcode-page-employee.page';

import { QrCodeModule } from 'ng-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewQrcodePageEmployeePageRoutingModule,
    QrCodeModule
  ],
  declarations: [ViewQrcodePageEmployeePage]
})
export class ViewQrcodePageEmployeePageModule {}
