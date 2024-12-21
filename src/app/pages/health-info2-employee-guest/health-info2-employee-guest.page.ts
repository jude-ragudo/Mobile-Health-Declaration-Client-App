import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController
import { HealthInfoStepProgressService } from '../services/health-info-step-progress.service';

@Component({
  selector: 'app-health-info2-employee-guest',
  templateUrl: './health-info2-employee-guest.page.html',
  styleUrls: ['./health-info2-employee-guest.page.scss'],
})
export class HealthInfo2EmployeeGuestPage implements OnInit {
  data: any = {};
  choice1: string = ''; // Initialize with an empty string or null
  choice2: string = ''; 

  constructor(private navCtrl: NavController, public stepProgressService: HealthInfoStepProgressService) { }

  ngOnInit() {
    this.stepProgressService.setCurrentStep(2);

    const receivedData = history.state.data;
    this.data = receivedData;

    console.log('Received Data on Page 2:', receivedData);
  }

  goToPrevPage() {
    this.navCtrl.navigateBack('/health-info1-employee-guest', { state: {data: this.data} }); // Navigate to the prev page
  }

  areAllChoicesSelected(): boolean {
    return this.choice1 !== '' && this.choice2 !== '';
  }

  goToNextPage(): void {
    if (this.areAllChoicesSelected()) {
      this.data.FaceToFace = this.choice1;
      this.data.DirectCare = this.choice2;

      this.stepProgressService.setCurrentStep(3); // Update the step to 3
      this.navCtrl.navigateForward('/health-info3-employee-guest' ,{
        state: { data: this.data } 
      }); 
    } else {
      // Display an error message or feedback to the user
    }
  }
}
