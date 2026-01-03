import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { MatModules } from '../../core/mat-modules';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { LocationComponent } from './location/location.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../core/shared/shared.module';

export const routes: Routes = [
  { path: 'sales-order', component: SalesOrderComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'location', component: LocationComponent },
];

@NgModule({
  declarations: [
    SalesOrderComponent,
    DashboardComponent,
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
    DashboardComponent,
    CustomerComponent,
    LocationComponent,
    
  ],
})
export class PagesModule {}
