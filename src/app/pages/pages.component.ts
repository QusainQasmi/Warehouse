import { Component } from '@angular/core';
import { PagesModule } from './pages.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  standalone: true,
  imports: [RouterOutlet, PagesModule],
})

export class PagesComponent {
  
    constructor(){}

}