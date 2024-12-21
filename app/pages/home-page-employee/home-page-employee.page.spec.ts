import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageEmployeePage } from './home-page-employee.page';
import { waitForAsync } from '@angular/core/testing';

describe('HomePageEmployeePage', () => {
  let component: HomePageEmployeePage;
  let fixture: ComponentFixture<HomePageEmployeePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HomePageEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
