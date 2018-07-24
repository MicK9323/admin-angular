import { Routes, RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
    { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Inicio'} },
    { path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'} },
    { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Graficas'} },
    { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Configuración de Cuenta'} },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ] },
];

export const PAGES_ROUTES = RouterModule.forChild(routes);
