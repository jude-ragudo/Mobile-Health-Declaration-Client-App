import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempAndSummaryEmployeeGuestPage } from './temp-and-summary-employee-guest.page';
import { waitForAsync } from '@angular/core/testing';

describe('TempAndSummaryEmployeeGuestPage', () => {
  let component: TempAndSummaryEmployeeGuestPage;
  let fixture: ComponentFixture<TempAndSummaryEmployeeGuestPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TempAndSummaryEmployeeGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
