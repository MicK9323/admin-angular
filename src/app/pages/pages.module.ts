import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


// Componentes
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficodonaComponent } from '../components/graficodona/graficodona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Rutas del modulo
import { PAGES_ROUTES } from './pages.routes';

// Importamos el modulo con los componentes de shared
// ya que son en estos componentes se usaran los componentes
// importados

@NgModule({
  declarations: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficodonaComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  providers: [],
})
export class PagesModule {}
