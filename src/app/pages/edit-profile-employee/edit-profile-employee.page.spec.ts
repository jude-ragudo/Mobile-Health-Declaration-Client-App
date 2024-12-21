import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProfileEmployeePage } from './edit-profile-employee.page';
import { waitForAsync } from '@angular/core/testing';

describe('EditProfileEmployeePage', () => {
  let component: EditProfileEmployeePage;
  let fixture: ComponentFixture<EditProfileEmployeePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EditProfileEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
