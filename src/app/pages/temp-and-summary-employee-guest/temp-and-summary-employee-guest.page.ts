import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'; // Import NavController

@Component({
  selector: 'app-temp-and-summary-employee-guest',
  templateUrl: './temp-and-summary-employee-guest.page.html',
  styleUrls: ['./temp-and-summary-employee-guest.page.scss'],
})
export class TempAndSummaryEmployeeGuestPage implements OnInit {
  data: any = {};
  healthData = [
    { name: 'Lance Isaiah Ragudo', condition1: 'Yes', condition2: 'No', condition3: 'Yes', condition4: 'No', condition5: 'No', condition6: 'No', condition7: 'Yes', condition8: 'Yes', location1:'Japan', location2:'Makati' },
  ];

  temp = '';
  tempIsValid = true;
  position = '';
  hasEmptyFields = true;
  checkboxValue = false;

  checkEmptyFields() {
    this.tempIsValid = (this.temp.length == 4) && this.validateTemp(this.temp);

    this.hasEmptyFields = !(this.tempIsValid && this.temp.includes('.') && this.checkboxValue);
  }

  onNumericInput(event: any) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9.]/g, '');
    const sanitizedValue = numericValue.replace(/\.+/g, '.');
    this.temp = sanitizedValue;
  }

  validateTemp(input: string): boolean {
    // Regular expression to match the format: [digits].[digit][digit]
    const regex = /^\d{2}\.\d$/;
    return regex.test(input);
  }

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  ngOnInit() {
    this.restoreNavigationState(); // Restore the navigation state on page load
    const receivedData = history.state.data;
    this.data = receivedData;

    this.healthData[0].condition1 = this.data.Fever;
    this.healthData[0].condition2 = this.data.Cough;
    this.healthData[0].condition3 = this.data.BodyPain;
    this.healthData[0].condition4 = this.data.SoreThroat;
    this.healthData[0].condition5 = this.data.FaceToFace;
    this.healthData[0].condition6 = this.data.DirectCare;
    this.healthData[0].condition7 = this.data.TravelledAbroad;
    this.healthData[0].condition8 = this.data.TravelledWithinCity;
    this.healthData[0].location1 = this.data.TravelledAbroadInput || 'N/A';
    this.healthData[0].location2 = this.data.TravelledWithinCityInput || 'N/A';

    console.log('Received Data on Summary Page:', this.data);
  }

  async saveChanges() {
    console.log('Save Changes clicked');

    this.healthData[0].condition1 = this.data.Fever;
    this.healthData[0].condition2 = this.data.Cough;
    this.healthData[0].condition3 = this.data.BodyPain;
    this.healthData[0].condition4 = this.data.SoreThroat;
    this.healthData[0].condition5 = this.data.FaceToFace;
    this.healthData[0].condition6 = this.data.DirectCare;
    this.healthData[0].condition7 = this.data.TravelledAbroad;
    this.healthData[0].condition8 = this.data.TravelledWithinCity;
    this.healthData[0].location1 = this.data.TravelledAbroadInput || 'N/A';
    this.healthData[0].location2 = this.data.TravelledWithinCityInput || 'N/A';
    console.log('Updated Health Data:', this.healthData);
  
    const updatedTemp = this.temp;
    console.log('Updated Temperature:', updatedTemp);

    // Store navigation state when changes are saved
    this.storeNavigationState();
   
    const alert = await this.alertController.create({
      header: 'Changes Saved',
      message: 'Your changes have been saved.',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  goToPrevPage() {
    this.navCtrl.navigateBack('/health-info3-employee-guest', { state: {data: this.data} }); // Navigate to the prev page
    // Store navigation state when navigating to the previous page
    this.storeNavigationState();
  }

  goToNextPage() {
    // Store navigation state when navigating to the next page
    this.storeNavigationState();
    this.data.Temperature = this.temp;

    console.log('Sent Data to QR Page:', this.data);
    this.navCtrl.navigateForward('/authorization-employee-guest', {
      state: { data: this.data } 
    }); // Navigate to the next page
  }

  private storeNavigationState() {
    const navigationState = {
      page: 'temp-and-summary-employee-guest',
      data: this.data,
      temp: this.temp // Store other relevant data for this page
    };

    localStorage.setItem('navigationState', JSON.stringify(navigationState));
    console.log('Navigation state stored:', localStorage.getItem('navigationState'));
  }

  private restoreNavigationState() {
    const isNewSession = localStorage.getItem('isNewSession');
    
    if (!isNewSession) {
      const savedNavigationState = localStorage.getItem('navigationState');
      if (savedNavigationState) {
        const navigationState = JSON.parse(savedNavigationState);

        if (navigationState.page === 'temp-and-summary-employee-guest') {
          this.data = navigationState.data;
          this.temp = navigationState.temp;
          console.log('Navigation state restored:', navigationState);
        }
      }
    } else {
      localStorage.removeItem('isNewSession');
    }
  }
}
