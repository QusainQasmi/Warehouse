import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'new', component: ProductFormComponent },
  { path: ':id/edit', component: ProductFormComponent }
];

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, MatModules, SharedModule, ProductFormComponent, RouterModule.forChild(routes)],
})
export class ProductModule {}
