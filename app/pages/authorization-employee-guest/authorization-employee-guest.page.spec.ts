import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizationEmployeeGuestPage } from './authorization-employee-guest.page';
import { waitForAsync } from '@angular/core/testing';

describe('AuthorizationEmployeeGuestPage', () => {
  let component: AuthorizationEmployeeGuestPage;
  let fixture: ComponentFixture<AuthorizationEmployeeGuestPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AuthorizationEmployeeGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
