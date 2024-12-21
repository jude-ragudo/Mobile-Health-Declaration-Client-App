import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthInfo1EmployeeGuestPage } from './health-info1-employee-guest.page';
import { waitForAsync } from '@angular/core/testing';

describe('HealthInfo1EmployeeGuestPage', () => {
  let component: HealthInfo1EmployeeGuestPage;
  let fixture: ComponentFixture<HealthInfo1EmployeeGuestPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HealthInfo1EmployeeGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
