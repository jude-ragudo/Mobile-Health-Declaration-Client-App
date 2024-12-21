import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { NavController } from '@ionic/angular';
import { HomePageAuthorizationLinkService } from '../services/home-page-authorization-link.service';


@Component({
  selector: 'app-authorization-employee-guest',
  templateUrl: './authorization-employee-guest.page.html',
  styleUrls: ['./authorization-employee-guest.page.scss'],
})
export class AuthorizationEmployeeGuestPage implements OnInit {
  data: any = {};
  checkboxValue: boolean = false;
  signatureCaptured: boolean = false;

  isClicked: boolean = false;
  @ViewChild('signaturePad', { static: true }) signaturePadElement: ElementRef<HTMLCanvasElement> | undefined;

  private signaturePad: SignaturePad | undefined;

  constructor(
    private navCtrl: NavController,
    private authorizationLinkService: HomePageAuthorizationLinkService
  ) {}
  ngOnInit() {

    const receivedData = history.state.data;
    this.data = receivedData;

    console.log('Received Data:', receivedData);
  }

  ngAfterViewInit() {
    if (this.signaturePadElement) {
      this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);

      // Listen for the canvas content changes
      this.signaturePad.on();

      // Here we will listen for any drawing event and set signatureCaptured to true
      this.signaturePadElement.nativeElement.addEventListener('touchend', () => {
        this.signatureCaptured = true;
      });
    }
  }


  clearSignature() {
    if (this.signaturePad) {
      // Toggle the clicked flag
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
      }, 300); // Reset the flag after 300ms

      this.signatureCaptured = false;
      this.signaturePad.clear();

    }
  }

  saveSignature() {
    if (this.checkboxValue && this.signaturePad && !this.signaturePad.isEmpty()) {
      this.data.signatureCaptured = true;
      // Navigate to the next page
      this.navCtrl.navigateForward('/view-qrcode-page-employee', {
        state: { data: this.data } 
      });
  
      // Enable the button on the home page
      if (this.data.EmployeeStatus) {
        this.authorizationLinkService.setButtonState(true);
      } else {
        this.authorizationLinkService.setButtonState(false);
      }
    }
  }

  goBack() {
    this.navCtrl.navigateForward('/temp-and-summary-employee-guest', { state: { data: this.data }});
  }
}
