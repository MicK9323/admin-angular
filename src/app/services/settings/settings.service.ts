import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor() { this.loadSettings(); }

  saveSettings() {
    localStorage.setItem('userSettings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if (localStorage.getItem('userSettings')) {
      this.settings = JSON.parse( localStorage.getItem('userSettings') );
    }
  }

}

interface Settings {
  themeUrl: string;
  theme: string;
}
