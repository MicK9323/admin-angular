import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menus: any = [
    {
      titulo: 'Inicio',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/dashboard'
        },
        {
          titulo: 'Progress',
          url: '/progress'
        },
        {
          titulo: 'Graficas',
          url: '/graficas1'
        }
      ]
    }
  ];

  constructor() { }
}
