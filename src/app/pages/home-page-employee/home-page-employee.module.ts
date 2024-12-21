import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageEmployeePageRoutingModule } from './home-page-employee-routing.module';

import { HomePageEmployeePage } from './home-page-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageEmployeePageRoutingModule
  ],
  declarations: [HomePageEmployeePage]
})
export class HomePageEmployeePageModule {}
