import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MatModules } from '../../core/mat-modules';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { LocationComponent } from './location/location.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';

export const routes: Routes = [
  { path: 'sales-order', component: SalesOrderComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'location', component: LocationComponent },
];

@NgModule({
  declarations: [
    SalesOrderComponent,
    InventoryComponent,
    DashboardComponent,
    ProductComponent,
    CustomerComponent,
    LocationComponent,
  ],

  imports: [
    MatModules,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],

  exports: [
    SalesOrderComponent,
    InventoryComponent,
    DashboardComponent,
    ProductComponent,
    CustomerComponent,
    LocationComponent,
  ],
})
export class PagesModule {}
