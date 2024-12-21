import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToGuestRegister() {
    this.navCtrl.navigateForward('/register-page-guest');
  }

  goToEmployeeRegister() {
    this.navCtrl.navigateForward('/register-page-employee');
  }
}
