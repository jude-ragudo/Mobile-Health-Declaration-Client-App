import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile-employee',
  templateUrl: './edit-profile-employee.page.html',
  styleUrls: ['./edit-profile-employee.page.scss'],
})
export class EditProfileEmployeePage implements OnInit {
  data: any = {};
  selectedDepartment: string = ''; // Variable to store the selected department
  customDepartment: string = ''; // Variable to store the custom department when "Other" is selected

  departmentChanged() {
    // Reset the customDepartment when a different option is selected
    if (this.selectedDepartment !== 'other') {
      this.customDepartment = '';
    }
  }

  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  contactNum: string = '';
  numIsValid = true;
  position: string = '';
  hasEmptyFields = true;

  checkEmptyFields() {
    this.numIsValid = this.contactNum.length == 11;
    
    if (this.selectedDepartment === 'other') {
      this.hasEmptyFields = !(this.firstName.trim() && this.middleName.trim() && this.lastName.trim() && this.numIsValid && this.selectedDepartment.trim() && this.position.trim() && this.customDepartment.trim()); 
    } else {
      this.hasEmptyFields = !(this.firstName.trim() && this.middleName.trim() && this.lastName.trim() && this.numIsValid && this.selectedDepartment.trim() && this.position.trim());
    }
  }

  onNumericInput(event: any) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    this.contactNum = numericValue;
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    const receivedData = history.state.data;
    this.data = receivedData;
    this.firstName = receivedData.FirstName;
    this.middleName = receivedData.MiddleName;
    this.lastName = receivedData.LastName;
    this.contactNum = receivedData.ContactNum;
    this.selectedDepartment = receivedData.Department;
    this.customDepartment = receivedData.OtherDepartment;
    this.position = receivedData.Position;

    // console.log('Received Data on Home Page:', receivedData);

    // console.log('Check this data:', this.data);
    this.checkEmptyFields();
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
    this.data.FirstName = this.firstName;
    this.data.MiddleName = this.middleName;
    this.data.LastName = this.lastName;
    this.data.ContactNum = this.contactNum;
    this.data.Department = this.selectedDepartment;
    this.data.OtherDepartment = this.customDepartment;
    this.data.Position = this.position;

    // to rewrite file
    const filename = 'employeeData.json';
    this.writeDataToFile(this.data, filename);

    // console.log('Sent Data to Home Page:', data);

    this.navCtrl.navigateForward('/home-page-employee', {state: { data: this.data }});
  }

  goBack(){
    this.navCtrl.navigateForward('/home-page-employee', {state: { data: this.data }});
  }
}
