import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPagePage } from './landing-page.page';
import { waitForAsync } from '@angular/core/testing';

describe('LandingPagePage', () => {
  let component: LandingPagePage;
  let fixture: ComponentFixture<LandingPagePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LandingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
