import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-page-guest',
  templateUrl: './register-page-guest.page.html',
  styleUrls: ['./register-page-guest.page.scss'],
})
export class RegisterPageGuestPage implements OnInit {
  data: any = {};
  selectedDepartment: string = ''; // Variable to store the selected department
  customDepartment: string = ''; // Variable to store the custom department when "Other" is selected

  departmentChanged() {
    // Reset the customDepartment when a different option is selected
    if (this.selectedDepartment !== 'other') {
      this.customDepartment = '';
    }
  }

  firstName = '';
  middleName = '';
  lastName = '';
  contactNum = '';
  numIsValid = true;
  company = '';
  purpose = '';
  hasEmptyFields = true;
  checkboxValue = false;

  checkEmptyFields() {
    this.numIsValid = this.contactNum.length == 11;
    
    this.hasEmptyFields = !(this.firstName.trim() && this.middleName.trim() && this.lastName.trim() && this.numIsValid && this.company.trim() && this.purpose.trim() && this.checkboxValue);

    if (this.checkboxValue) {
      this.showTermsAndCond();
    }
  }

  async showTermsAndCond() {
    const alert = await this.alertController.create({
      header: 'Guest Registration Terms and Conditions',
      message: 'By registering as a guest on Bastion, Inc.\'s health declaration app, you are bound by the following terms. This involves collecting your personal data, including health-related details, for safety reasons during your visit. Your data will only be used for health declarations and safety within Bastion, Inc., treated confidentially, and shared only with your explicit consent. Your accurate health information contributes to the well-being of all present. While data security is a priority, please note the inherent risks in online data transmission. Clicking "Register" implies your consent and agreement to these terms. If you disagree, kindly refrain from registering.',
      buttons: ['OK']
    });

    await alert.present();
  }

  onNumericInput(event: any) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    this.contactNum = numericValue;
  }


  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  ngOnInit() {
    localStorage.setItem('isNewSession', 'true');
  }

  writeDataToFile(data: any, filename: string) {
    const jsonBlob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(jsonBlob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
  }

  goToGuestPrivacy() {
    this.data.EmployeeStatus = false;
    this.data.GuestStatus = true;
    this.data.FirstName = this.firstName;
    this.data.MiddleName = this.middleName;
    this.data.LastName = this.lastName;
    this.data.ContactNum = this.contactNum;
    this.data.Department = '';
    this.data.OtherDepartment = '';
    this.data.Position = '';
    this.data.Company = this.company;
    this.data.Purpose = this.purpose;

    // uncomment to write file
    const filename = 'guestData.json';
    this.writeDataToFile(this.data, filename);

    console.log('Sent Data to Privacy Guest Page:', this.data);

    this.navCtrl.navigateForward('/data-privacy-consent-employee-guest', {state: { data: this.data }});
  }

  goBack(){
    this.navCtrl.navigateForward('/landing-page')
  }
}
