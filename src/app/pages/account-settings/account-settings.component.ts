import { SettingsService } from '../../services/service.index';
import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  Renderer2,
  AfterViewInit,
  ViewChildren,
  QueryList
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
    `
      #themecolors a {
        cursor: pointer;
      }
    `
  ]
})
export class AccountSettingsComponent implements AfterViewInit {
  @ViewChildren('selector') allThemes: QueryList<ElementRef>;

  constructor(
    @Inject(DOCUMENT) private _document,
    private _renderer: Renderer2,
    private _settings: SettingsService
  ) {}

  ngAfterViewInit() {
    this.loadingCheck();
  }

  public changeTheme(color: string, link: ElementRef) {
    let url: string = `assets/css/colors/${color}.css`;
    const elem: ElementRef = this._document.getElementById('theme');
    this._renderer.setAttribute(elem, 'href', url);
    this.applyingCheck(link);
    // Grabar en el localstorage
    this._settings.settings.themeUrl = url;
    this._settings.settings.theme = color;
    this._settings.saveSettings();
  }

  private applyingCheck(link: ElementRef) {
    const elem: ElementRef = this.allThemes.find(
      ref => ref.nativeElement.classList.contains('working')
    );
    if (elem) {
      this._renderer.removeClass(elem.nativeElement, 'working');
    }
    this._renderer.addClass(link, 'working');
  }

  private loadingCheck() {
    const color = this._settings.settings.theme;
    const elem: ElementRef = this.allThemes.find(
      ref => ref.nativeElement.getAttribute('data-theme') === color
    );
    if (elem) {
      this._renderer.addClass(elem.nativeElement, 'working');
    }
  }
}
