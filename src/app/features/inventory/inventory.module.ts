import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './components/inventory-list/inventory-list.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: InventoryComponent },
  { path: 'new', component: InventoryFormComponent },
  { path: ':id/edit', component: InventoryFormComponent }
];

@NgModule({
  declarations: [InventoryComponent],
  imports: [CommonModule, MatModules, SharedModule, InventoryFormComponent, RouterModule.forChild(routes)],
})
export class InventoryModule {}
