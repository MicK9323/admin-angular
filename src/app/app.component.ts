import { SettingsService } from './services/service.index';
import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(
    private _settings: SettingsService,
    private renderer: Renderer2
  ) {
    this.renderer.setAttribute(document.getElementById('theme'), 'href', this._settings.settings.themeUrl);
  }

}
