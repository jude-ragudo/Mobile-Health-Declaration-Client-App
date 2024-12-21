import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController
import { HealthInfoStepProgressService } from '../services/health-info-step-progress.service';

@Component({
  selector: 'app-health-info3-employee-guest',
  templateUrl: './health-info3-employee-guest.page.html',
  styleUrls: ['./health-info3-employee-guest.page.scss'],
})
export class HealthInfo3EmployeeGuestPage implements OnInit {
  data: any = {};
  radioGroup1: string | null = null;
  radioGroup2: string | null = null;
  inputField1: string = '';
  inputField2: string = '';
  inputField1Disabled: boolean = true;
  inputField2Disabled: boolean = true;

  constructor(private navCtrl: NavController, public stepProgressService: HealthInfoStepProgressService) { }

  ngOnInit() {
    this.stepProgressService.setCurrentStep(3);

    const receivedData = history.state.data;
    this.data = receivedData;
    
    console.log('Received Data on Page 3:', receivedData); 
  }

  goToPrevPage() {
    this.navCtrl.navigateBack('/health-info2-employee-guest', { state: {data: this.data} }); // Navigate to the prev page
  }

  isValid(): boolean {
    return (
      (this.radioGroup1 === 'no' || (this.radioGroup1 === 'yes' && this.inputField1.trim() !== '')) &&
      (this.radioGroup2 === 'no' || (this.radioGroup2 === 'yes' && this.inputField2.trim() !== ''))
    );
  }
  
  goToNextPage(): void {
    if (this.isValid()) {
      this.data.TravelledAbroad = this.radioGroup1;
      this.data.TravelledWithinCity = this.radioGroup2;
      this.data.TravelledAbroadInput = this.inputField1;
      this.data.TravelledWithinCityInput = this.inputField2;

      // Navigate to the next page
      this.navCtrl.navigateForward('/temp-and-summary-employee-guest', {
        state: { data: this.data } 
      } 
      );
    }
  }
  
  // Enable/disable input fields based on radio group selections
  updateInputFieldStatus(): void {
    this.inputField1Disabled = this.radioGroup1 !== 'yes';
    this.inputField2Disabled = this.radioGroup2 !== 'yes';
        
    // Clear input fields when corresponding radio group selection is 'No'
    if (this.radioGroup1 === 'no') {
      this.inputField1 = '';
    }
    if (this.radioGroup2 === 'no') {
      this.inputField2 = '';
    }
  }

  // Called whenever radio group selections change
  onRadioChange(): void {
    this.updateInputFieldStatus();
  }
}
