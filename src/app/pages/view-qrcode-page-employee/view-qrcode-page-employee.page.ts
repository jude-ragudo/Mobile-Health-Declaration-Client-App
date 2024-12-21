import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-view-qrcode-page-employee',
  templateUrl: './view-qrcode-page-employee.page.html',
  styleUrls: ['./view-qrcode-page-employee.page.scss'],
})
export class ViewQrcodePageEmployeePage implements OnInit {
  data: any = {};

  qrData: string = ''; 
  createdCode: string = ''; 

  constructor(private route: ActivatedRoute, private navCtrl: NavController,) {}

  ngOnInit() {
    const receivedData = history.state.data;
    this.data = receivedData;
    const fullName = this.data.FirstName + ' ' + this.data.MiddleName + ' ' + this.data.LastName;

    const qrData = {
      CurrentDate: this.data.CurrentDate,
      CurrentTime: this.data.CurrentTime,
      Name: fullName,
      Fever: this.data.Fever,
      Cough: this.data.Cough,
      BodyPain: this.data.BodyPain,
      SoreThroat: this.data.SoreThroat,
      FaceToFace: this.data.FaceToFace,
      DirectCare: this.data.DirectCare,
      TravelledAbroad: this.data.TravelledAbroad,
      TravelledWithinCity: this.data.TravelledWithinCity,
      TravelledAbroadInput: this.data.TravelledAbroadInput,
      TravelledWithinCityInput: this.data.TravelledWithinCityInput,
      Temperature: this.data.Temperature
    }

    console.log('Received Data:', receivedData);

    // Export data to JSON
    this.exportData();
    this.generateQRCode(qrData); // Pass the data to the function
    
  }

  generateQRCode(data: any) { // Pass the data to the function
    const jsonString = JSON.stringify(data);

    QRCode.toDataURL(jsonString, (err, qrCodeDataUrl) => {
      if (err) {
        console.error(err);
      } else {
        this.createdCode = qrCodeDataUrl; // Set the QR code data URL
      }
    });
  }

  exportData() {
    const filename = 'healthData.json';
    this.writeDataToFile(this.data, filename);
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

  goToHome(){
    if (this.data.EmployeeStatus) {
      this.navCtrl.navigateForward('/home-page-employee', { state: {data: this.data} });
    } else {
      this.navCtrl.navigateForward('/landing-page', { state: {data: this.data} });
    }
  }
}
