import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-data-privacy-consent-employee-guest',
  templateUrl: './data-privacy-consent-employee-guest.page.html',
  styleUrls: ['./data-privacy-consent-employee-guest.page.scss'],
})
export class DataPrivacyConsentEmployeeGuestPage implements OnInit {
  data: any = {};
  checkboxValue: boolean = false;
  currentDate: string;
  currentTime: string;

  constructor(private navCtrl: NavController) {   
    const currentDate = new Date(); 
    const optionsDate: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };

    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
    };

    this.currentDate = currentDate.toLocaleString(undefined, optionsDate);
    this.currentTime = currentDate.toLocaleString(undefined, optionsTime);
  }

  ngOnInit() {
    const receivedData = history.state.data;
    this.data = receivedData;
    
    // console.log('Received Data from z Page:', receivedData);
  }

  proceed(){
    if(this.checkboxValue){
      this.data.CurrentDate = this.currentDate;
      this.data.CurrentTime = this.currentTime;

      this.navCtrl.navigateForward('/health-info1-employee-guest', {
        state: {data: this.data}
      });
    }
  }

  backToMenu(){
    if (this.data.EmployeeStatus) {
      console.log('Sent Data to Home Employee Page:', this.data);
      this.navCtrl.navigateForward('/home-page-employee', { state: {data: this.data} });
    } else {
      console.log('Sent Data to Register Guest Page:', this.data);
      this.navCtrl.navigateForward('/register-page-guest', { state: {data: this.data} });
    }
  }

}
