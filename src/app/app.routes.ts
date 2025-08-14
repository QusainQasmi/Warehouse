import { Routes } from '@angular/router';
import { WarehousesComponent } from './pages/warehouses/warehouses.component';
import { SideNavComponent } from './pages/side-nav/side-nav.component';

export const routes: Routes = [
  { path: '', component: SideNavComponent },
  { path: 'warehouses', component: WarehousesComponent }
];