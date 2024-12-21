import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register-page-employee',
  templateUrl: './register-page-employee.page.html',
  styleUrls: ['./register-page-employee.page.scss'],
})
export class RegisterPageEmployeePage implements OnInit {
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
  position = '';
  hasEmptyFields = true;
  checkboxValue = false;

  checkEmptyFields() {
    this.numIsValid = this.contactNum.length == 11;
    
    if (this.selectedDepartment === 'other') {
      this.hasEmptyFields = !(this.firstName.trim() && this.middleName.trim() && this.lastName.trim() && this.numIsValid && this.selectedDepartment.trim() && this.position.trim() && this.checkboxValue && this.customDepartment.trim()); 
    } else {
      this.hasEmptyFields = !(this.firstName.trim() && this.middleName.trim() && this.lastName.trim() && this.numIsValid && this.selectedDepartment.trim() && this.position.trim() && this.checkboxValue);
    }

    if (this.checkboxValue) {
      this.showTermsAndCond();
    }
  }

  async showTermsAndCond() {
    const alert = await this.alertController.create({
      header: 'Employee Registration Terms and Conditions',
      message: 'By registering for an employee account on Bastion, Inc\'s health declaration app, you are agreeing to our terms. This involves the collection of your personal information, including health-related data, for workplace safety purposes. Rest assured, your data will be confidential and would not be shared without your explicit consent. Your accurate health information will help ensure the well-being of all employees. While we prioritize data security, please note that online data transmission carries risks. Clicking "Register" implies your consent and acceptance of these terms. If you disagree, kindly refrain from proceeding with the registration.',
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

  goToEmployeeHome() {
    this.data.EmployeeStatus = true;
    this.data.GuestStatus = false;
    this.data.FirstName = this.firstName;
    this.data.MiddleName = this.middleName;
    this.data.LastName = this.lastName;
    this.data.ContactNum = this.contactNum;
    this.data.Department = this.selectedDepartment;
    this.data.OtherDepartment = this.customDepartment;
    this.data.Position = this.position;
    this.data.Company = '';
    this.data.Purpose = '';

    // uncomment to write file
    const filename = 'employeeData.json';
    this.writeDataToFile(this.data, filename);

    console.log('Sent Data to Home Page:', this.data);

    this.navCtrl.navigateForward('/home-page-employee', {state: { data: this.data }});
  }

  goBack() {
    this.navCtrl.navigateForward('/landing-page');
  }
}
