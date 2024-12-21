import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashScreenPage } from './splash-screen.page';
import { waitForAsync } from '@angular/core/testing';

describe('SplashScreenPage', () => {
  let component: SplashScreenPage;
  let fixture: ComponentFixture<SplashScreenPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SplashScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
