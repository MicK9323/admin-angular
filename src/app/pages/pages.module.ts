import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

// Componentes
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  providers: [],
})
export class PagesModule {}
