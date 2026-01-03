import { Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

export const routes: Routes = [
  { 
    path: '', 
    component: SideNavComponent,
    children: [
        { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
        { path: 'warehouse', loadChildren: () => import('./features/warehouse/warehouse.module').then(m => m.WarehouseModule)},
        { path: 'inventory', loadChildren: () => import('./features/inventory/inventory.module').then(m => m.InventoryModule)},
        { path: 'product', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)},
        { path: 'setup', loadChildren: () => import('./features/setup/setup.module').then(m => m.SetupModule)},
        { path: 'accounts', loadChildren: () => import('./features/accounts/accounts.module').then(m => m.AccountsModule)}
    ]
  },
];