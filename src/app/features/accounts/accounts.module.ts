import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';
import { ChartOfAccountsComponent } from './chart-of-accounts/chart-of-accounts.component';
import { VoucherComponent } from './voucher/voucher.component';
import { invalid } from 'moment';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {  path: 'chartOfAccounts', component: ChartOfAccountsComponent },
  {  path: 'voucher', component: VoucherComponent },
  {  path: 'invoice', component: InvoiceComponent },

];

@NgModule({
  declarations: [], 
  imports: [CommonModule, MatModules, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountsModule {}