import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewQrcodePageEmployeePage } from './view-qrcode-page-employee.page';
import { waitForAsync } from '@angular/core/testing';

describe('ViewQrcodePageEmployeePage', () => {
  let component: ViewQrcodePageEmployeePage;
  let fixture: ComponentFixture<ViewQrcodePageEmployeePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ViewQrcodePageEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
