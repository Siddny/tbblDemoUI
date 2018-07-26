import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { CallsComponent } from './components/calls/calls.component';

const appRoute: Routes = [
  {
    path: '',
    component: LandingComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'landing',
    component: LandingComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'call',
    component: CallsComponent,
    // canActivate: [AuthGuard],
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);
