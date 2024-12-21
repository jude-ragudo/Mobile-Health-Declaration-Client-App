import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthInfo2EmployeeGuestPage } from './health-info2-employee-guest.page';
import { waitForAsync } from '@angular/core/testing';

describe('HealthInfo2EmployeeGuestPage', () => {
  let component: HealthInfo2EmployeeGuestPage;
  let fixture: ComponentFixture<HealthInfo2EmployeeGuestPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HealthInfo2EmployeeGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
