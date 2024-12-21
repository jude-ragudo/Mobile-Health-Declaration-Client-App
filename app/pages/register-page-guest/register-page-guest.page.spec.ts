import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPageGuestPage } from './register-page-guest.page';
import { waitForAsync } from '@angular/core/testing';

describe('RegisterPageGuestPage', () => {
  let component: RegisterPageGuestPage;
  let fixture: ComponentFixture<RegisterPageGuestPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RegisterPageGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
