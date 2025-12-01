import { Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

export const routes: Routes = [
  { 
    path: '', 
    component: SideNavComponent,
    children: [
        { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
        // { path: 'warehouse', loadChildren: () => import('./pages/warehouses/warehouse.module').then(m => m.WarehouseModule)}
    ]
  },
];