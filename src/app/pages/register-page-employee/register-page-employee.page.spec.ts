import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPageEmployeePage } from './register-page-employee.page';
import { waitForAsync } from '@angular/core/testing';

describe('RegisterPageEmployeePage', () => {
  let component: RegisterPageEmployeePage;
  let fixture: ComponentFixture<RegisterPageEmployeePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RegisterPageEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
