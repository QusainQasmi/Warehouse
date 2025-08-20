import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehousesComponent } from './warehouses/warehouses.component';
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
  { path: 'warehouse', component: WarehousesComponent },
  { path: 'sales-order', component: SalesOrderComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'location', component: LocationComponent },
];

@NgModule({
  declarations: [
    WarehousesComponent,
    SalesOrderComponent,
    InventoryComponent,
    DashboardComponent,
    ProductComponent,
    CustomerComponent,
    LocationComponent
  ],

  imports: [
    MatModules,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    WarehousesComponent,
    SalesOrderComponent,
    InventoryComponent,
    DashboardComponent,
    ProductComponent,
    CustomerComponent,
    LocationComponent
  ]
})
export class PagesModule {}