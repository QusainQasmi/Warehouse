import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { SharedModule } from '../../../core/shared/shared.module';
import { MatModules } from '../../../core/mat-modules';

const routes: Routes = [
  { path: '', component: AccountsComponent }
];

@NgModule({
  imports: [CommonModule, MatModules, SharedModule, AccountsComponent, RouterModule.forChild(routes)],
})
export class AccountsModule {}
