import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { GlobalInjector } from '../core/GlobalInjector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet],
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor(protected injector: Injector) {
    GlobalInjector.setInjector(injector);
  }

}
