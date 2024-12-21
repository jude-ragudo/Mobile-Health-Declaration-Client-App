import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'home-page-employee',
    loadChildren: () => import('./pages/home-page-employee/home-page-employee.module').then( m => m.HomePageEmployeePageModule)
  },
  {
    path: 'health-info1-employee-guest',
    loadChildren: () => import('./pages/health-info1-employee-guest/health-info1-employee-guest.module').then( m => m.HealthInfo1EmployeeGuestPageModule)
  },
  {
    path: 'health-info2-employee-guest',
    loadChildren: () => import('./pages/health-info2-employee-guest/health-info2-employee-guest.module').then( m => m.HealthInfo2EmployeeGuestPageModule)
  },
  {
    path: 'health-info3-employee-guest',
    loadChildren: () => import('./pages/health-info3-employee-guest/health-info3-employee-guest.module').then( m => m.HealthInfo3EmployeeGuestPageModule)
  },
  {
    path: 'data-privacy-consent-employee-guest',
    loadChildren: () => import('./pages/data-privacy-consent-employee-guest/data-privacy-consent-employee-guest.module').then( m => m.DataPrivacyConsentEmployeeGuestPageModule)
  },
  {
    path: 'authorization-employee-guest',
    loadChildren: () => import('./pages/authorization-employee-guest/authorization-employee-guest.module').then( m => m.AuthorizationEmployeeGuestPageModule)
  },
  {
    path: 'view-qrcode-page-employee',
    loadChildren: () => import('./pages/view-qrcode-page-employee/view-qrcode-page-employee.module').then( m => m.ViewQrcodePageEmployeePageModule)
  },
  {
    path: 'register-page-guest',
    loadChildren: () => import('./pages/register-page-guest/register-page-guest.module').then( m => m.RegisterPageGuestPageModule)
  },
  {
    path: 'register-page-employee',
    loadChildren: () => import('./pages/register-page-employee/register-page-employee.module').then( m => m.RegisterPageEmployeePageModule)
  },
  {
    path: 'edit-profile-employee',
    loadChildren: () => import('./pages/edit-profile-employee/edit-profile-employee.module').then( m => m.EditProfileEmployeePageModule)
  },
  {
    path: 'temp-and-summary-employee-guest',
    loadChildren: () => import('./pages/temp-and-summary-employee-guest/temp-and-summary-employee-guest.module').then( m => m.TempAndSummaryEmployeeGuestPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
