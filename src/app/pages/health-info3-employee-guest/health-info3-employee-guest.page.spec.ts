import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthInfo3EmployeeGuestPage } from './health-info3-employee-guest.page';
import { waitForAsync } from '@angular/core/testing';

describe('HealthInfo3EmployeeGuestPage', () => {
  let component: HealthInfo3EmployeeGuestPage;
  let fixture: ComponentFixture<HealthInfo3EmployeeGuestPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HealthInfo3EmployeeGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
