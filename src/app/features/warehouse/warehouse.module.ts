import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehousesComponent } from './components/warehouse-list/warehouses.component';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WarehousesComponent },
  { path: 'new', component: WarehousesComponent },
  { path: ':id/edit', component: WarehousesComponent }
];

@NgModule({
  declarations: [WarehousesComponent],
  imports: [CommonModule, MatModules, SharedModule, RouterModule.forChild(routes)],
})
export class WarehouseModule {}
