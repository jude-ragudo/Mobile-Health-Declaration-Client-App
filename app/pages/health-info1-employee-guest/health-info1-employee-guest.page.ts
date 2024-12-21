import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HealthInfoStepProgressService } from '../services/health-info-step-progress.service';


@Component({
  selector: 'app-health-info1-employee-guest',
  templateUrl: './health-info1-employee-guest.page.html',
  styleUrls: ['./health-info1-employee-guest.page.scss'],
})
export class HealthInfo1EmployeeGuestPage implements OnInit {
  data: any = {};
  choice1: string = ''; // Initialize with an empty string or null
  choice2: string = ''; 
  choice3: string = ''; 
  choice4: string = '';   

  constructor(private navCtrl: NavController, public stepProgressService: HealthInfoStepProgressService) { }

  ngOnInit() {
    this.stepProgressService.setCurrentStep(1); // Update the step for this page


    const receivedData = history.state.data;
    this.data = receivedData;
  }

  goToPrevPage() {
    this.navCtrl.navigateBack('/data-privacy-consent-employee-guest', { state: {data: this.data} }); // Navigate to the prev page
  }

  areAllChoicesSelected(): boolean {
    return this.choice1 !== '' && this.choice2 !== '' && this.choice3 !== '' && this.choice4 !== '';
  }

  goToNextPage(): void {
    if (this.areAllChoicesSelected()) {
      this.data.Fever = this.choice1;
      this.data.Cough = this.choice2;
      this.data.BodyPain = this.choice3;
      this.data.SoreThroat = this.choice4;

      this.stepProgressService.setCurrentStep(2); // Update the step to 2
      this.navCtrl.navigateForward('/health-info2-employee-guest', {
        state: {data: this.data}
      }); 
    } else {
      // Display an error message or feedback to the user
    }
  }
}
