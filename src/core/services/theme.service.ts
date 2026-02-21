import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ThemeService {

  private themes = ['theme-green', 'theme-purple', 'theme-dark']; // multiple theme edit,

  initTheme() {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme && this.themes.includes(savedTheme)) {
      this.applyTheme(savedTheme);
    } else {
      this.applyDefault();
    }
  }

  applyTheme(theme: string) {
    const root = document.documentElement;
    this.themes.forEach(t => root.classList.remove(t));
    root.classList.add(theme);
    localStorage.setItem('app-theme', theme);
  }

  applyDefault() {
    const root = document.documentElement;
    this.themes.forEach(t => root.classList.remove(t));
    localStorage.removeItem('app-theme');
  }
}