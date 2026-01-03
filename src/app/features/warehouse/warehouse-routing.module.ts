import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehousesComponent } from './components/warehouse-list/warehouses.component';

const routes: Routes = [
  { path: '', component: WarehousesComponent },
  { path: 'new', component: WarehousesComponent },
  { path: ':id/edit', component: WarehousesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule {}
