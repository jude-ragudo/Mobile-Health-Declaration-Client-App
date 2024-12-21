import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataPrivacyConsentEmployeeGuestPage } from './data-privacy-consent-employee-guest.page';
import { waitForAsync } from '@angular/core/testing';

describe('DataPrivacyConsentEmployeeGuestPage', () => {
  let component: DataPrivacyConsentEmployeeGuestPage;
  let fixture: ComponentFixture<DataPrivacyConsentEmployeeGuestPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DataPrivacyConsentEmployeeGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
