import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomePageAuthorizationLinkService } from '../services/home-page-authorization-link.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-page-employee',
  templateUrl: './home-page-employee.page.html',
  styleUrls: ['./home-page-employee.page.scss'],
})
export class HomePageEmployeePage implements OnInit {
  data: any = {};
  EmployeeStatus: boolean = false;
  GuestStatus: boolean = false;
  
  firstName: string = '';

  buttonEnabled = false;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    public authorizationLinkService: HomePageAuthorizationLinkService
  ) {
    this.authorizationLinkService.enableButton$.subscribe(enable => {
      this.buttonEnabled = enable;
    });
  }

  ngOnInit() {
    const lastButtonClickTimestamp = localStorage.getItem('lastButtonClickTimestamp');
    if (lastButtonClickTimestamp && Date.now() - parseInt(lastButtonClickTimestamp, 10) >= 24 * 60 * 60 * 1000) {
      localStorage.removeItem('lastButtonClickTimestamp');
    }

    const receivedData = history.state.data;
    this.data = receivedData;
    
    console.log('Received Data from y Page:', receivedData);
  }

  ionViewWillEnter() {
    // Re-initialize your data when the page is about to enter
    const receivedData = history.state.data;
    this.data = receivedData;
    
    this.firstName = this.data.FirstName;
  }

  async goToDataConsent() {
    const lastButtonClickTimestamp = localStorage.getItem('lastButtonClickTimestamp');
    
    if (!lastButtonClickTimestamp || Date.now() - parseInt(lastButtonClickTimestamp, 10) >= 30 * 1000) {
      localStorage.setItem('lastButtonClickTimestamp', Date.now().toString());
      
      this.navCtrl.navigateForward('/data-privacy-consent-employee-guest', { state: { data: this.data } });
    } else {
      // Show an alert message
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'You can only fill the form once a day.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  goToEditProfile() {
    // console.log('Sent Data to Edit Page:', data);

    this.navCtrl.navigateForward('/edit-profile-employee', {state: { data: this.data }});
  }

  goToViewQR() {
    this.navCtrl.navigateForward('/view-qrcode-page-employee', {state: { data: this.data }});
  }
}
