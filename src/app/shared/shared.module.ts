import { RouterModule } from '@angular/router';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NofoundComponent } from './nofound/nofound.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Se exportaran los componentes de este modulo para emplearlos
// donde se necesario

@NgModule({
  declarations: [
    NofoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ],
  exports: [
    NofoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
})
export class SharedModule {}
