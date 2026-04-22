import { Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

export const routes: Routes = [
  { 
    path: '', 
    component: SideNavComponent,
    children: [
        { path: 'setup', loadChildren: () => import('./features/setup/setup.module').then(m => m.SetupModule)},
        { path: 'crm', loadChildren: () => import('./features/crm/crm.module').then(m => m.CRMModule)},
        { path: 'transportation', loadChildren: () => import('./features/Transportation/transportation.module').then(m => m.TransportationModule)},
        { path: 'accounts', loadChildren: () => import('./features/accounts/accounts.module').then(m => m.AccountsModule)},
    ]
  },
];