import { RegisterComponent } from './login/register.component';
import { NofoundComponent } from './shared/nofound/nofound.component';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NofoundComponent }
];

// Para importar la clase de define un modulo
export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});
