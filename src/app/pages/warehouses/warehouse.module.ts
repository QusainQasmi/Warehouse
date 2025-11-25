import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WarehousesComponent } from './warehouses.component';
import { SharedModule } from '../../../core/shared/shared.module';

const routes: Routes = [
  { path: '', component: WarehousesComponent },
  { path: 'form', component: WarehousesComponent },
];

@NgModule({
  declarations: [WarehousesComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class WarehouseModule {}
