import { Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

export const routes: Routes = [
  { 
    path: '', 
    component: SideNavComponent,
    children: [
        { path: 'setup', loadChildren: () => import('./features/setup/setup.module').then(m => m.SetupModule)},
    ]
  },
];